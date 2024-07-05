import React, { useState } from 'react';

const sismoData = [
    { fecha: '2024-07-01', hora: '05:28:14', magnitude: 3.2, depth: 23.8, location: '36 km al NOROESTE de VILLA DE ALVAREZ, COL', state: 'COL' },
    { fecha: '2024-07-01', hora: '05:39:27', magnitude: 3.2, depth: 5.0, location: '20 km al NORESTE de MANZANILLO, COL', state: 'COL' },
    { fecha: '2024-07-01', hora: '06:20:23', magnitude: 3.2, depth: 36.1, location: '14 km al OESTE de AUTLAN DE NAVARRO, JAL', state: 'JAL' },
    { fecha: '2024-05-31', hora: '03:22:18', magnitude: 4.2, depth: 20.7, location: '14 km al NOROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-05-31', hora: '04:14:08', magnitude: 3.5, depth: 16.2, location: '23 km al ESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-05-31', hora: '04:57:33', magnitude: 3.7, depth: 10.0, location: '10 km al OESTE de CINTALAPA, CHIS', state: 'CHIS' },
    { fecha: '2024-05-31', hora: '05:33:45', magnitude: 3.1, depth: 10.0, location: '29 km al SUROESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-05-31', hora: '06:12:59', magnitude: 3.9, depth: 30.2, location: '36 km al NOROESTE de CINTALAPA, CHIS', state: 'CHIS' },
    { fecha: '2024-05-31', hora: '07:23:17', magnitude: 3.4, depth: 25.4, location: '5 km al SUR de EL GRULLO, JAL', state: 'JAL' },
    { fecha: '2024-05-31', hora: '08:45:06', magnitude: 3.6, depth: 37.8, location: '15 km al SUROESTE de ACAPULCO, GRO', state: 'GRO' },
    { fecha: '2024-05-31', hora: '09:17:40', magnitude: 3.5, depth: 11.3, location: '20 km al NORESTE de TECOMAN, COL', state: 'COL' },
    { fecha: '2024-05-31', hora: '10:01:05', magnitude: 4.0, depth: 55.6, location: '40 km al NORESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-05-31', hora: '10:24:12', magnitude: 3.7, depth: 29.1, location: '60 km al OESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-05-31', hora: '11:02:30', magnitude: 3.6, depth: 20.0, location: '35 km al SUR de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-05-31', hora: '11:35:55', magnitude: 3.8, depth: 40.7, location: '70 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-05-31', hora: '12:14:19', magnitude: 3.2, depth: 15.3, location: '15 km al ESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-05-31', hora: '13:47:26', magnitude: 3.9, depth: 25.9, location: '24 km al SURESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '00:12:14', magnitude: 3.6, depth: 10.0, location: '18 km al NORTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '00:37:29', magnitude: 3.9, depth: 35.0, location: '50 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '01:02:19', magnitude: 3.5, depth: 30.0, location: '14 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-01', hora: '01:28:03', magnitude: 3.3, depth: 10.0, location: '35 km al OESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '02:00:25', magnitude: 3.6, depth: 55.0, location: '60 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '02:35:47', magnitude: 3.7, depth: 40.0, location: '70 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-01', hora: '03:07:16', magnitude: 3.2, depth: 30.0, location: '40 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '03:42:29', magnitude: 3.5, depth: 20.0, location: '10 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '04:17:21', magnitude: 3.8, depth: 25.0, location: '45 km al OESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '04:55:36', magnitude: 3.4, depth: 15.0, location: '15 km al NOROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-01', hora: '05:31:09', magnitude: 3.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '06:05:27', magnitude: 3.6, depth: 25.0, location: '70 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '06:47:18', magnitude: 3.5, depth: 30.0, location: '10 km al SUR de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-01', hora: '07:12:29', magnitude: 3.4, depth: 20.0, location: '60 km al OESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-01', hora: '07:51:46', magnitude: 3.8, depth: 25.0, location: '40 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '08:28:12', magnitude: 3.6, depth: 55.0, location: '25 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '09:07:19', magnitude: 3.9, depth: 45.0, location: '10 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '09:44:03', magnitude: 3.7, depth: 25.0, location: '30 km al SUROESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '10:21:47', magnitude: 3.5, depth: 15.0, location: '50 km al SUR de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '10:55:36', magnitude: 3.4, depth: 20.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '11:34:28', magnitude: 3.6, depth: 55.0, location: '35 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-01', hora: '12:14:09', magnitude: 3.2, depth: 30.0, location: '20 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '12:49:30', magnitude: 3.7, depth: 40.0, location: '25 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-01', hora: '13:25:47', magnitude: 3.5, depth: 20.0, location: '10 km al SUR de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '14:03:25', magnitude: 3.6, depth: 55.0, location: '45 km al OESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '14:41:17', magnitude: 3.9, depth: 25.0, location: '60 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '15:17:50', magnitude: 3.8, depth: 10.0, location: '50 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '15:55:28', magnitude: 3.5, depth: 30.0, location: '25 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '16:32:47', magnitude: 3.4, depth: 20.0, location: '40 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-01', hora: '17:08:35', magnitude: 3.7, depth: 55.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '17:43:21', magnitude: 3.6, depth: 25.0, location: '20 km al NOROESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '18:21:57', magnitude: 3.5, depth: 30.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '18:56:24', magnitude: 3.3, depth: 15.0, location: '10 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-01', hora: '19:34:13', magnitude: 3.9, depth: 55.0, location: '5 km al NOROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '20:12:57', magnitude: 3.8, depth: 45.0, location: '25 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '20:47:39', magnitude: 3.5, depth: 25.0, location: '60 km al OESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-01', hora: '21:21:17', magnitude: 3.4, depth: 20.0, location: '10 km al NOROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-01', hora: '21:57:04', magnitude: 3.7, depth: 10.0, location: '30 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '22:33:18', magnitude: 3.6, depth: 55.0, location: '45 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '23:07:29', magnitude: 3.9, depth: 25.0, location: '5 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-01', hora: '23:41:18', magnitude: 3.5, depth: 30.0, location: '10 km al NOROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '00:47:31', magnitude: 3.8, depth: 55.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-02', hora: '01:21:18', magnitude: 3.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '01:55:27', magnitude: 3.5, depth: 45.0, location: '35 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-02', hora: '03:37:27', magnitude: 3.5, depth: 30.0, location: '15 km al OESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '04:11:09', magnitude: 3.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '04:44:16', magnitude: 3.4, depth: 20.0, location: '50 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '05:18:22', magnitude: 2.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '05:51:29', magnitude: 3.5, depth: 30.0, location: '70 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '06:24:18', magnitude: 6.0, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-02', hora: '06:59:01', magnitude: 5.8, depth: 45.0, location: '5 km al NORTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '07:32:27', magnitude: 3.6, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '08:05:19', magnitude: 3.5, depth: 25.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-02', hora: '08:41:23', magnitude: 3.7, depth: 55.0, location: '70 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '09:14:36', magnitude: 5.9, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '09:48:45', magnitude: 3.5, depth: 15.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '10:23:17', magnitude: 3.6, depth: 55.0, location: '50 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '10:57:09', magnitude: 3.4, depth: 20.0, location: '70 km al OESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-02', hora: '11:31:16', magnitude: 3.7, depth: 45.0, location: '15 km al NORTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '12:03:28', magnitude: 3.5, depth: 25.0, location: '60 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '12:39:22', magnitude: 3.3, depth: 55.0, location: '5 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '13:12:46', magnitude: 3.8, depth: 25.0, location: '10 km al NORTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-02', hora: '13:48:29', magnitude: 3.6, depth: 45.0, location: '40 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '14:22:11', magnitude: 3.5, depth: 30.0, location: '15 km al OESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-02', hora: '14:58:16', magnitude: 3.7, depth: 10.0, location: '20 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '15:34:29', magnitude: 3.4, depth: 55.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '16:07:45', magnitude: 3.6, depth: 45.0, location: '35 km al NORESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-02', hora: '16:41:16', magnitude: 3.5, depth: 20.0, location: '50 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-02', hora: '17:17:12', magnitude: 3.8, depth: 25.0, location: '10 km al NOROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-02', hora: '17:49:31', magnitude: 5.6, depth: 55.0, location: '20 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-03', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '01:21:18', magnitude: 5.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-03', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-03', hora: '04:11:09', magnitude: 3.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '05:18:22', magnitude: 4.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-03', hora: '06:24:18', magnitude: 3.4, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-03', hora: '07:32:27', magnitude: 4.6, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '08:05:19', magnitude: 3.5, depth: 25.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-03', hora: '09:14:36', magnitude: 3.9, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '01:21:18', magnitude: 3.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-04', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-04', hora: '04:11:09', magnitude: 3.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '05:18:22', magnitude: 3.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-04', hora: '06:24:18', magnitude: 3.4, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-04', hora: '07:32:27', magnitude: 3.6, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '08:05:19', magnitude: 3.5, depth: 25.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-04', hora: '09:14:36', magnitude: 3.9, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '01:21:18', magnitude: 3.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-03', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-03', hora: '04:11:09', magnitude: 3.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '05:18:22', magnitude: 3.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-03', hora: '06:24:18', magnitude: 3.4, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-03', hora: '07:32:27', magnitude: 3.6, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-03', hora: '08:05:19', magnitude: 3.5, depth: 25.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-03', hora: '09:14:36', magnitude: 3.9, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '01:21:18', magnitude: 3.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-04', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-04', hora: '04:11:09', magnitude: 4.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '05:18:22', magnitude: 3.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-04', hora: '06:24:18', magnitude: 4.4, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-04', hora: '07:32:27', magnitude: 3.8, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-04', hora: '09:14:36', magnitude: 3.1, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-05', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-05', hora: '01:21:18', magnitude: 3.2, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-05', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-05', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-05', hora: '04:11:09', magnitude: 3.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-05', hora: '05:18:22', magnitude: 3.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-05', hora: '06:24:18', magnitude: 3.4, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-05', hora: '07:32:27', magnitude: 2.6, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-05', hora: '08:05:19', magnitude: 5.5, depth: 25.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-05', hora: '09:14:36', magnitude: 6.0, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-05', hora: '00:14:27', magnitude: 5.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-06', hora: '01:21:18', magnitude: 1.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-06', hora: '02:29:13', magnitude: 3.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-06', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-06', hora: '04:11:09', magnitude: 4.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-06', hora: '05:18:22', magnitude: 3.9, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-06', hora: '06:24:18', magnitude: 3.1, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-06', hora: '07:32:27', magnitude: 4.6, depth: 10.0, location: '35 km al OESTE de CHIMILUCAN, GRO', state: 'GRO' },
    { fecha: '2024-07-01', hora: '05:28:14', magnitude: 3.2, depth: 23.8, location: '36 km al NOROESTE de VILLA DE ALVAREZ, COL', state: 'COL' },
    { fecha: '2024-07-01', hora: '05:39:27', magnitude: 3.2, depth: 5.0, location: '20 km al NORESTE de MANZANILLO, COL', state: 'COL' },
    { fecha: '2024-07-01', hora: '06:20:23', magnitude: 3.2, depth: 36.1, location: '14 km al OESTE de AUTLAN DE NAVARRO, JAL', state: 'JAL' },
    { fecha: '2024-07-01', hora: '03:22:18', magnitude: 4.2, depth: 20.7, location: '14 km al NOROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-07-01', hora: '04:14:08', magnitude: 3.5, depth: 16.2, location: '23 km al ESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-07-02', hora: '04:57:33', magnitude: 3.7, depth: 10.0, location: '10 km al OESTE de CINTALAPA, CHIS', state: 'CHIS' },
    { fecha: '2024-07-02', hora: '05:33:45', magnitude: 3.1, depth: 10.0, location: '29 km al SUROESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-07-02', hora: '06:12:59', magnitude: 3.9, depth: 30.2, location: '36 km al NOROESTE de CINTALAPA, CHIS', state: 'CHIS' },
    { fecha: '2024-07-03', hora: '07:23:17', magnitude: 3.4, depth: 25.4, location: '5 km al SUR de EL GRULLO, JAL', state: 'JAL' },
    { fecha: '2024-07-03', hora: '08:45:06', magnitude: 3.6, depth: 37.8, location: '15 km al SUROESTE de ACAPULCO, GRO', state: 'GRO' },
    { fecha: '2024-07-03', hora: '09:17:40', magnitude: 3.5, depth: 11.3, location: '20 km al NORESTE de TECOMAN, COL', state: 'COL' },
    { fecha: '2024-07-04', hora: '10:01:05', magnitude: 4.0, depth: 55.6, location: '40 km al NORESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-07-04', hora: '10:24:12', magnitude: 3.7, depth: 29.1, location: '60 km al OESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-07-04', hora: '11:02:30', magnitude: 3.6, depth: 20.0, location: '35 km al SUR de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-07-05', hora: '11:35:55', magnitude: 3.8, depth: 40.7, location: '70 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-07-05', hora: '12:14:19', magnitude: 3.2, depth: 15.3, location: '15 km al ESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-07-05', hora: '13:47:26', magnitude: 3.9, depth: 25.9, location: '24 km al SURESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-07-05', hora: '00:12:14', magnitude: 3.6, depth: 10.0, location: '18 km al NORTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-07-05', hora: '00:37:29', magnitude: 3.9, depth: 35.0, location: '50 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-07-07', hora: '01:02:19', magnitude: 3.5, depth: 30.0, location: '14 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-07-07', hora: '01:28:03', magnitude: 3.3, depth: 10.0, location: '35 km al OESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-07-08', hora: '02:00:25', magnitude: 3.6, depth: 55.0, location: '60 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-07-08', hora: '02:35:47', magnitude: 3.7, depth: 40.0, location: '70 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-07-08', hora: '03:07:16', magnitude: 3.2, depth: 30.0, location: '40 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-08', hora: '03:42:29', magnitude: 3.5, depth: 20.0, location: '10 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-07', hora: '04:17:21', magnitude: 3.8, depth: 25.0, location: '45 km al OESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-07', hora: '04:55:36', magnitude: 3.4, depth: 15.0, location: '15 km al NOROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-07', hora: '05:31:09', magnitude: 3.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-07', hora: '06:05:27', magnitude: 3.6, depth: 25.0, location: '70 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-07', hora: '06:47:18', magnitude: 3.5, depth: 30.0, location: '10 km al SUR de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-07', hora: '07:12:29', magnitude: 2.4, depth: 20.0, location: '60 km al OESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-07', hora: '07:51:46', magnitude: 3.8, depth: 25.0, location: '40 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-07', hora: '08:28:12', magnitude: 3.6, depth: 55.0, location: '25 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-07', hora: '09:07:19', magnitude: 3.9, depth: 45.0, location: '10 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-07', hora: '09:44:03', magnitude: 3.7, depth: 25.0, location: '30 km al SUROESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-07', hora: '10:21:47', magnitude: 3.5, depth: 15.0, location: '50 km al SUR de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-09', hora: '10:55:36', magnitude: 3.4, depth: 20.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-09', hora: '11:34:28', magnitude: 3.6, depth: 55.0, location: '35 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-09', hora: '12:14:09', magnitude: 3.2, depth: 30.0, location: '20 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-09', hora: '12:49:30', magnitude: 3.7, depth: 40.0, location: '25 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-09', hora: '13:25:47', magnitude: 3.5, depth: 20.0, location: '10 km al SUR de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-10', hora: '14:03:25', magnitude: 3.6, depth: 55.0, location: '45 km al OESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-10', hora: '14:41:17', magnitude: 1.9, depth: 25.0, location: '60 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-10', hora: '15:17:50', magnitude: 1.8, depth: 10.0, location: '50 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-10', hora: '15:55:28', magnitude: 3.5, depth: 30.0, location: '25 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-10', hora: '16:32:47', magnitude: 3.4, depth: 20.0, location: '40 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-10', hora: '17:08:35', magnitude: 3.7, depth: 55.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-11', hora: '17:43:21', magnitude: 3.6, depth: 25.0, location: '20 km al NOROESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-12', hora: '18:21:57', magnitude: 3.5, depth: 30.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-12', hora: '18:56:24', magnitude: 3.3, depth: 15.0, location: '10 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-12', hora: '19:34:13', magnitude: 3.9, depth: 55.0, location: '5 km al NOROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-12', hora: '20:12:57', magnitude: 3.8, depth: 45.0, location: '25 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-12', hora: '20:47:39', magnitude: 3.5, depth: 25.0, location: '60 km al OESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-13', hora: '21:21:17', magnitude: 2.4, depth: 20.0, location: '10 km al NOROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-13', hora: '23:07:29', magnitude: 3.9, depth: 25.0, location: '5 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-13', hora: '23:41:18', magnitude: 2.5, depth: 30.0, location: '10 km al NOROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-13', hora: '00:14:27', magnitude: 3.4, depth: 20.0, location: '15 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-13', hora: '00:47:31', magnitude: 3.8, depth: 55.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-13', hora: '01:21:18', magnitude: 1.7, depth: 10.0, location: '70 km al NORESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-13', hora: '01:55:27', magnitude: 3.5, depth: 45.0, location: '35 km al SUROESTE de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-13', hora: '02:29:13', magnitude: 1.3, depth: 25.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-14', hora: '03:04:28', magnitude: 3.6, depth: 55.0, location: '40 km al SUROESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-14', hora: '03:37:27', magnitude: 2.5, depth: 30.0, location: '15 km al OESTE de PUERTO ESCONDIDO, OAX', state: 'OAX' },
    { fecha: '2024-06-14', hora: '04:11:09', magnitude: 3.8, depth: 25.0, location: '45 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-14', hora: '04:44:16', magnitude: 3.4, depth: 20.0, location: '50 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-14', hora: '05:18:22', magnitude: 2.7, depth: 55.0, location: '35 km al SUR de MATIAS ROMERO, OAX', state: 'OAX' },
    { fecha: '2024-06-14', hora: '05:51:29', magnitude: 3.5, depth: 30.0, location: '70 km al SUROESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-14', hora: '06:24:18', magnitude: 2.0, depth: 25.0, location: '20 km al NORESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-14', hora: '06:59:01', magnitude: 5.8, depth: 45.0, location: '5 km al NORTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-15', hora: '07:32:27', magnitude: 3.6, depth: 10.0, location: '35 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-15', hora: '08:05:19', magnitude: 2.5, depth: 25.0, location: '60 km al SUROESTE de CD HIDALGO, CHIS', state: 'CHIS' },
    { fecha: '2024-06-15', hora: '08:41:23', magnitude: 3.7, depth: 55.0, location: '70 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-15', hora: '09:14:36', magnitude: 5.9, depth: 30.0, location: '35 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
    { fecha: '2024-06-15', hora: '09:48:45', magnitude: 4.5, depth: 15.0, location: '20 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-15', hora: '10:23:17', magnitude: 4.6, depth: 55.0, location: '50 km al SUROESTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-15', hora: '10:57:09', magnitude: 3.4, depth: 20.0, location: '70 km al OESTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-15', hora: '11:31:16', magnitude: 3.7, depth: 45.0, location: '15 km al NORTE de RIO GRANDE, OAX', state: 'OAX' },
    { fecha: '2024-06-15', hora: '12:03:28', magnitude: 3.5, depth: 25.0, location: '60 km al SUROESTE de OMETEPEC, GRO', state: 'GRO' },
    { fecha: '2024-06-15', hora: '12:39:22', magnitude: 3.3, depth: 55.0, location: '5 km al SUROESTE de IGUALA, GRO', state: 'GRO' },
    { fecha: '2024-06-15', hora: '13:12:46', magnitude: 3.8, depth: 25.0, location: '10 km al NORTE de COALCOMAN, MICH', state: 'MICH' },
    { fecha: '2024-06-15', hora: '13:48:29', magnitude: 3.6, depth: 45.0, location: '40 km al NORESTE de SAN MARCOS, GRO', state: 'GRO' },
];


const SismoTable = ({ startDate, endDate, minMagnitude, maxMagnitude, minDepth, maxDepth, state }) => {
    const filteredData = sismoData.filter(sismo => {
        const sismoDate = new Date(sismo.fecha);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        return (
            (!startDate || sismoDate >= startDateObj) &&
            (!endDate || sismoDate <= endDateObj) &&
            (!minMagnitude || sismo.magnitude >= minMagnitude) &&
            (!maxMagnitude || sismo.magnitude <= maxMagnitude) &&
            (!minDepth || sismo.depth >= minDepth) &&
            (!maxDepth || sismo.depth <= maxDepth) &&
            (!state || sismo.state === state)
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Magnitud</th>
                    <th>Profundidad</th>
                    <th>Ubicación</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((sismo, index) => (
                    <tr key={index}>
                        <td>{sismo.fecha}</td>
                        <td>{sismo.hora}</td>
                        <td>{sismo.magnitude}</td>
                        <td>{sismo.depth}</td>
                        <td>{sismo.location}</td>
                        <td>{sismo.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Componente principal
const Sismologico = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minMagnitude, setMinMagnitude] = useState('');
    const [maxMagnitude, setMaxMagnitude] = useState('');
    const [minDepth, setMinDepth] = useState('');
    const [maxDepth, setMaxDepth] = useState('');
    const [state, setState] = useState('');

    const handleFilter = () => {
        // Filtrar la tabla con los datos proporcionados
    };

    return (
        <div className="sismologico">
            <h1>Catálogo de Sismos</h1>
            <div className="filters">
                <div>
                    <label>Desde</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label>Hasta</label>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
               
                <div>
                    <label>Estado</label>
                    <select value={state} onChange={(e) => setState(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="GRO">Guerrero</option>
                        <option value="OAX">Oaxaca</option>
                        <option value="CHIS">Chiapas</option>
                        <option value="JAL">Jalisco</option>
                        <option value="COL">Colima</option>
                        <option value="MIC">Michoacán</option>
                    </select>
                </div>
                <button onClick={handleFilter}>Filtrar</button>
            </div>
            <SismoTable
                startDate={startDate}
                endDate={endDate}
                minMagnitude={minMagnitude}
                maxMagnitude={maxMagnitude}
                minDepth={minDepth}
                maxDepth={maxDepth}
                state={state}
            />
        </div>
    );
};

// Estilos CSS
const styles = `
    .sismologico {
        font-family: Arial, sans-serif;
        margin: 20px;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .filters div {
        display: flex;
        flex-direction: column;
    }

    .filters label {
        margin-bottom: 5px;
    }

    .filters input, .filters select {
        padding: 5px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    thead {
        background-color: #f2f2f2;
    }

    th, td {
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;
    }

    tbody tr:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export default Sismologico;

// Inyectar estilos CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
