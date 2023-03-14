-- Creamos la database
CREATE DATABASE database_cajas;

-- nos conectamos a la base de datos
USE database_cajas;

--creamos tos tablas una para las cajas, otra para los usuarios.
CREATE TABLE usuarios(
    id INT(10) NOT NULL,
    usuario VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL
);

--para alterar la tabla
ALTER TABLE usuarios ADD PRYMARY KEY (id);

ALTER TABLE usuarios MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

--ver la escructura de la tabla
DESCRIBE usuarios;




CREATE TABLE usuarios(
    id INT(10) NOT NULL AUTO_INCREMENT,
    remitente VARCHAR(50) NOT NULL,
    emisor VARCHAR(50) NOT NULL,
    peso FLOAT(6,2) NOT NULL,
    medidas VARCHAR(20) NOT NULL,
    fragil BIT,
    tipo VARCHAR(7),
    fechaEnvio date,
    PRYMARY KEY (id)
);