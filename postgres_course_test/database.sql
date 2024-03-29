CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name_group VARCHAR(255),
    available_lessons INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,   
    name VARCHAR(255),
    surname VARCHAR(255),
    role VARCHAR(255),
    email VARCHAR(255),
    group_id INTEGER REFERENCES groups(id),
    password VARCHAR(255),
    token VARCHAR(255)
);

CREATE TABLE homework (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    lesson_number INTEGER,
    content TEXT,
    instructor_feedback TEXT,
    group_id INTEGER REFERENCES groups(id),
    status VARCHAR(255) DEFAULT 'no'
);