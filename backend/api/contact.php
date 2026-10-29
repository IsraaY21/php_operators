<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$message = $_POST['message'];

if ($name !== '' && $message !== '') {
    $line = date('Y-m-d H:i:s') . " - $name: $message" . PHP_EOL;
    file_put_contents(__DIR__ . '/feedback.txt', $line, FILE_APPEND);

    echo json_encode(['message' => 'Thanks! Your feedback was saved.']);
} else {
    echo json_encode(['message' => 'Name and message cannot be empty']);
}
