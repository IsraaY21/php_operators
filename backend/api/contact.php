<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$message = $_POST['message'];

if ($name !== '' && $message !== '') {
    echo json_encode(['message' => "Received from $name: $message"]);
} else {
    echo json_encode(['message' => 'Name and message cannot be empty']);
}