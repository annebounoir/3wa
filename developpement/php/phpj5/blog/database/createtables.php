<?php

$create_table_users = '
    CREATE TABLE IF NOT EXISTS users  (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name CHAR(150) NOT NULL,
        email CHAR(150) NOT NULL UNIQUE KEY,
        avatar CHAR(200) NULL,
        is_author BOOLEAN DEFAULT FALSE,
        is_admin BOOLEAN DEFAULT FALSE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';

$create_table_category = '
    CREATE TABLE IF NOT EXISTS category (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name CHAR(50) NOT NULL,
        description TEXT NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';

$create_table_posts = '
    CREATE TABLE IF NOT EXISTS posts (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        title CHAR(50) NOT NULL,
        content TEXT NOT NULL,
        postImgSrc CHAR(200) NOT NULL,
        author_id INT(11) NOT NULL,
        category_id INT(11) NOT NULL,
        CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES users (id),
        CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';


$create_table_comments = '
    CREATE TABLE IF NOT EXISTS comments (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        content CHAR(200) NOT NULL,
        user_id INT(11) NOT NULL,
        post_id INT(11) NOT NULL,
        CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users (id),
        CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
';


$create_user = '
    INSERT INTO users (name, email, is_author, is_admin) VALUES (\'admin\', \'admin@example.com\', true, true);
';

$create_user_password = '
  ALTER TABLE users ADD password CHAR(255) NOT NULL;
';
