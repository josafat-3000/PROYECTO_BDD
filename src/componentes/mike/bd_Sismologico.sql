CREATE DATABASE sismosDB;

USE sismosDB;

CREATE TABLE eventos_sismicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE,
    hora TIME,
    magnitude DECIMAL(3,1),
    depth DECIMAL(4,1),
    location VARCHAR(255),
    state CHAR(3)
);

INSERT INTO eventos_sismicos (fecha, hora, magnitude, depth, location, state) VALUES
('2024-06-03', '00:14:27', 3.4, 20.0, '15 km al SUROESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-03', '01:21:18', 3.7, 10.0, '70 km al NORESTE de RIO GRANDE, OAX', 'OAX'),
('2024-06-03', '02:29:13', 3.3, 25.0, '20 km al SUROESTE de IGUALA, GRO', 'GRO'),
('2024-06-03', '03:04:28', 3.6, 55.0, '40 km al SUROESTE de COALCOMAN, MICH', 'MICH'),
('2024-06-03', '04:11:09', 3.8, 25.0, '45 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-03', '05:18:22', 3.7, 55.0, '35 km al SUR de MATIAS ROMERO, OAX', 'OAX'),
('2024-06-03', '06:24:18', 3.4, 25.0, '20 km al NORESTE de COALCOMAN, MICH', 'MICH'),
('2024-06-03', '07:32:27', 3.6, 10.0, '35 km al SUROESTE de OMETEPEC, GRO', 'GRO'),
('2024-06-03', '08:05:19', 3.5, 25.0, '60 km al SUROESTE de CD HIDALGO, CHIS', 'CHIS'),
('2024-06-03', '09:14:36', 3.9, 30.0, '35 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-04', '00:14:27', 3.4, 20.0, '15 km al SUROESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-04', '01:21:18', 3.7, 10.0, '70 km al NORESTE de RIO GRANDE, OAX', 'OAX'),
('2024-06-04', '02:29:13', 3.3, 25.0, '20 km al SUROESTE de IGUALA, GRO', 'GRO'),
('2024-06-04', '03:04:28', 3.6, 55.0, '40 km al SUROESTE de COALCOMAN, MICH', 'MICH'),
('2024-06-04', '04:11:09', 3.8, 25.0, '45 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-04', '05:18:22', 3.7, 55.0, '35 km al SUR de MATIAS ROMERO, OAX', 'OAX'),
('2024-06-04', '06:24:18', 3.4, 25.0, '20 km al NORESTE de COALCOMAN, MICH', 'MICH'),
('2024-06-04', '07:32:27', 3.6, 10.0, '35 km al SUROESTE de OMETEPEC, GRO', 'GRO'),
('2024-06-04', '08:05:19', 3.5, 25.0, '60 km al SUROESTE de CD HIDALGO, CHIS', 'CHIS'),
('2024-06-04', '09:14:36', 3.9, 30.0, '35 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-05', '00:14:27', 3.4, 20.0, '15 km al SUROESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-05', '01:21:18', 3.7, 10.0, '70 km al NORESTE de RIO GRANDE, OAX', 'OAX'),
('2024-06-05', '02:29:13', 3.3, 25.0, '20 km al SUROESTE de IGUALA, GRO', 'GRO'),
('2024-06-05', '03:04:28', 3.6, 55.0, '40 km al SUROESTE de COALCOMAN, MICH', 'MICH'),
('2024-06-05', '04:11:09', 3.8, 25.0, '45 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-06-05', '05:18:22', 3.7, 55.0, '35 km al SUR de MATIAS ROMERO, OAX', 'OAX'),
('2024-06-05', '06:24:18', 3.4, 25.0, '20 km al NORESTE de COALCOMAN, MICH', 'MICH'),
('2024-06-05', '07:32:27', 3.6, 10.0, '35 km al SUROESTE de OMETEPEC, GRO', 'GRO'),
('2024-06-05', '08:05:19', 3.5, 25.0, '60 km al SUROESTE de CD HIDALGO, CHIS', 'CHIS'),
('2024-06-05', '09:14:36', 3.9, 30.0, '35 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-07-06', '23:58:45', 3.4, 30.0, '30 km al NOROESTE de IGUALA, GRO', 'GRO'),
('2024-07-07', '01:02:13', 3.6, 40.0, '45 km al SUROESTE de MATIAS ROMERO, OAX', 'OAX'),
('2024-07-07', '02:34:22', 3.8, 55.0, '50 km al NOROESTE de SAN MARCOS, GRO', 'GRO'),
('2024-07-07', '03:21:33', 3.2, 25.0, '30 km al SUROESTE de IGUALA, GRO', 'GRO'),
('2024-07-07', '04:10:24', 3.7, 35.0, '60 km al NORESTE de CD HIDALGO, CHIS', 'CHIS'),
('2024-07-07', '05:45:18', 3.5, 45.0, '35 km al NORESTE de SAN MARCOS, GRO', 'GRO'),
('2024-07-07', '06:20:14', 3.4, 20.0, '15 km al SUROESTE de SAN MARCOS, GRO', 'GRO'),
('2024-07-07', '07:15:16', 3.6, 30.0, '40 km al SUROESTE de COALCOMAN, MICH', 'MICH'),
('2024-07-07', '08:05:15', 3.7, 55.0, '50 km al SUR de MATIAS ROMERO, OAX', 'OAX'),
('2024-07-07', '09:02:23', 3.8, 25.0, '35 km al NORESTE de SAN MARCOS, GRO', 'GRO');
];
