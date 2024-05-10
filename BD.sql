CREATE DATABASE Farmacia;

USE Farmacia;

/* Creación de tablas */

CREATE TABLE Presentaciones(
	id INT auto_increment primary key,
    nombre VARCHAR(75)
);

CREATE TABLE Laboratorios(
	id INT auto_increment primary key,
    nombre VARCHAR(35)
);

CREATE TABLE Sustancias(
	id INT auto_increment primary key,
    nombre VARCHAR(50)
);

CREATE TABLE Medicamento(
	id INT auto_increment primary key,
    nombre VARCHAR(50),
    idSustancia INT, 
    idPresentacion INT,
    idLaboratorio INT, 
    descripcion VARCHAR(200),
    indicaciones VARCHAR(200),
    imagen LONGBLOB

);

CREATE TABLE Inventario (
	id INT auto_increment primary key,
    idMedicamento INT,
    nombreMedicamento VARCHAR(50),
    idLaboratorio INT,
    cantidad INT, 
    precioCompra DOUBLE,
    precioVenta DOUBLE,
    fechaCompra DATETIME,
    caducidad DATETIME
    
);

/* Llaves foráneas */

ALTER TABLE Medicamento
ADD CONSTRAINT fk_medicamento_sustancia
FOREIGN KEY (idSustancia) REFERENCES Sustancias(id);

ALTER TABLE Medicamento
ADD CONSTRAINT fk_medicamento_laboratorio
FOREIGN KEY (idLaboratorio) REFERENCES Laboratorios(id);

ALTER TABLE Medicamento
ADD CONSTRAINT fk_medicamento_presentacion
FOREIGN KEY (idPresentacion) REFERENCES Presentaciones(id);

ALTER TABLE Inventario
ADD CONSTRAINT fk_inventario_medicamento
FOREIGN KEY (idMedicamento) REFERENCES Medicamento(id);

ALTER TABLE Inventario
ADD CONSTRAINT fk_inventario_laboratorio
FOREIGN KEY (idLaboratorio) REFERENCES Laboratorios(id);


/* Consultas */
SELECT * FROM Laboratorios;
SELECT * FROM Presentaciones;
SELECT * FROM Sustancias;

/* BOrrar después */
