<?php
  $email = $_POST['email'];
  $name = $_POST['name'];
  $password = $_POST['password'];

  // Database connection
  $conn = new mysqli('localhost', 'root','', 'samistore');
  if($conn ->connect_error){
   die('Connection Failed : '.$conn->connect_error);
  }
  else{
   $stmt = $conn->prepare("insert into registration(email, name, password) values(?,?,?)");
   $stmt->bind_param("sss", $email, $name, $password)
   $stmt->execute();
   echo("Registration Successful...");
   $stmt->close();
   $conn->close();
  }
  ?>