<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Get UUID from query string
$uuid = $_GET['uuid'] ?? null;
if (!$uuid) {
    echo json_encode(["error" => "Missing UUID"]);
    exit;
}

// Fetch raw schedule JSON from school API
$url = "https://tahveltp.edu.ee/hois_back/schoolBoard/8/timetableByGroup?lang=ET&studentGroupUuid={$uuid}";
$response = file_get_contents($url);
$data = json_decode($response, true);

// Array to store lessons grouped by date
$lessonsByDate = [];

// Loop through each lesson in timetableEvents
foreach ($data['timetableEvents'] ?? [] as $lesson) {
    // --- Teachers ---
    $teacherNames = [];
    foreach ($lesson['teachers'] ?? [] as $teacher) {
        $teacherNames[] = trim($teacher['firstname'] . ' ' . $teacher['lastname']);
    }

    // --- Rooms ---
    $roomNames = [];
    foreach ($lesson['rooms'] ?? [] as $room) {
        $roomNames[] = trim($room['roomCode'] . ' ' . $room['buildingCode']);
    }

    // --- Format date ---
    $formattedDate = '';
    if (!empty($lesson['date'])) {
        $dt = new DateTime($lesson['date']);
        $formattedDate = $dt->format('d.m.Y'); // DD.MM.YYYY
    }

    // --- Groups ---
    $groups = [];
    if (!empty($lesson['studentGroups'])) {
        foreach ($lesson['studentGroups'] as $g) {
            $groups[] = $g['code'];
        }
    }

    // --- Add lesson under its date ---
    $lessonsByDate[$formattedDate][] = [
        'name' => $lesson['nameEt'] ?? $lesson['nameEn'] ?? '',
        'time' => ($lesson['timeStart'] ?? '') . ' - ' . ($lesson['timeEnd'] ?? ''),
        'teachers' => $teacherNames,
        'rooms' => $roomNames,
        'groups' => $groups
    ];
}

// --- Sort dates ascending ---
ksort($lessonsByDate);

// --- Sort lessons within each date by start time ---
foreach ($lessonsByDate as $date => &$lessons) {
    usort($lessons, function($a, $b) {
        return strtotime(substr($a['time'], 0, 5)) <=> strtotime(substr($b['time'], 0, 5));
    });
}
unset($lessons); // break reference

// Output grouped JSON
echo json_encode($lessonsByDate);
