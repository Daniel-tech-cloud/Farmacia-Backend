CREATE DATABASE Farmacia;

USE Farmacia;

/* Creación de tablas */

CREATE TABLE Presentaciones(
	id INT auto_increment primary key,
    nombre VARCHAR(75)
);

CREATE TABLE Laboratorios(
	id INT auto_increment primary key,
    nombre VARCHAR(35),  
    descripcion VARCHAR(200)
);

CREATE TABLE Sustancias(
	id INT auto_increment primary key,
    nombre VARCHAR(50), 
    descripcion VARCHAR(255)
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
SELECT * FROM Presentaciones;
SELECT * FROM Laboratorios;
SELECT * FROM Sustancias;
SELECT * FROM Medicamento;
SELECT * FROM Inventario;


/* BOrrar después */


/* Consulta por id */
SELECT 
    Medicamento.nombre AS nombreMedicamento,
    Medicamento.descripcion,
    Medicamento.indicaciones,
    Inventario.cantidad,
    Inventario.precioVenta,
    Inventario.caducidad,
    Laboratorios.nombre AS nombreLaboratorio
FROM 
    Medicamento
INNER JOIN 
    Inventario ON Medicamento.id = Inventario.idMedicamento
INNER JOIN 
    Laboratorios ON Medicamento.idLaboratorio = Laboratorios.id
WHERE 
    Medicamento.id = 13;

-- Inserción en la tabla "Medicamento"
INSERT INTO Medicamento (nombre, idSustancia, idPresentacion, idLaboratorio, descripcion, indicaciones) 
VALUES 
('Paracetamol Capsula', 1, 1, 29, 'Alivia el dolor y baja la fiebre.', 'Tomar una cápsula cada 6 horas.'),
('Ibuprofeno Comprimido', 31, 11, 46, 'Antiinflamatorio y analgésico.', 'Tomar un comprimido cada 8 horas con alimentos.'),
('Amoxicilina Suspensión', 56, 69, 34, 'Antibiótico de amplio espectro.', 'Tomar una cucharadita cada 12 horas.'),
('Omeprazol Tableta', 82, 79, 39, 'Inhibidor de la bomba de protones para el tratamiento del reflujo gástrico.', 'Tomar una tableta diaria en la mañana.'),
('Loratadina Jarabe', 80, 33, 45, 'Antihistamínico para aliviar alergias.', 'Tomar una cucharadita cada 24 horas.');

-- Inserción en la tabla "Inventario"
INSERT INTO Inventario (idMedicamento, nombreMedicamento, idLaboratorio, cantidad, precioCompra, precioVenta, fechaCompra, caducidad) 
VALUES 
(11, 'Paracetamol Capsula', 29, 100, 50.00, 80.00, '2024-05-08', '2025-05-08'),
(12, 'Ibuprofeno Comprimido', 29, 100, 70.00, 100.00, '2024-05-08', '2025-05-08'),
(13, 'Amoxicilina Suspensión', 29, 100, 90.00, 120.00, '2024-05-08', '2025-05-08'),
(14, 'Omeprazol Tableta', 29, 100, 120.00, 150.00, '2024-05-08', '2025-05-08'),
(15, 'Loratadina Jarabe', 29, 100, 80.00, 110.00, '2024-05-08', '2025-05-08');

UPDATE Sustancias
SET descripcion = CASE 
 WHEN nombre = 'Acarbosa' THEN 'Medicamento utilizado para el tratamiento de la diabetes tipo 2 al ayudar a controlar el azúcar en la sangre.'
    WHEN nombre = 'Aceite de ricino' THEN 'Laxante suave que se utiliza para aliviar el estreñimiento ocasional.'
    WHEN nombre = 'Acemetacina' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para aliviar el dolor y la inflamación.'
    WHEN nombre = 'Acenocumarol' THEN 'Anticoagulante utilizado para prevenir la formación de coágulos sanguíneos.'
    WHEN nombre = 'Acetaminofén' THEN 'Analgésico y antipirético comúnmente utilizado para aliviar el dolor y reducir la fiebre.'
    WHEN nombre = 'Acetazolamida' THEN 'Medicamento utilizado para tratar el glaucoma, la epilepsia y el mal de altura.'
    WHEN nombre = 'Acetilcisteína' THEN 'Mucolítico utilizado para reducir la viscosidad de las secreciones mucosas.'
    WHEN nombre = 'Ácido acetilsalicílico' THEN 'Antiinflamatorio, analgésico y antipirético que también se utiliza como antiagregante plaquetario.'
    WHEN nombre = 'Ácido alendrónico' THEN 'Bifosfonato utilizado para tratar la osteoporosis en mujeres posmenopáusicas.'
    WHEN nombre = 'Ácido ascórbico' THEN 'Vitamina C, esencial para el crecimiento y reparación de tejidos en el cuerpo humano.'
    WHEN nombre = 'Ácido azelaico' THEN 'Medicamento tópico utilizado para tratar el acné y la hiperpigmentación de la piel.'
    WHEN nombre = 'Ácido benzoico' THEN 'Conservante utilizado en alimentos y productos farmacéuticos.'
    WHEN nombre = 'Ácido bórico' THEN 'Antiséptico y fungicida utilizado en soluciones oftálmicas y tópicas.'
    WHEN nombre = 'Ácido clavulánico' THEN 'Agente combinado con antibióticos para tratar infecciones bacterianas.'
    WHEN nombre = 'Ácido fólico' THEN 'Vitamina B soluble en agua necesaria para la formación de glóbulos rojos y el ADN.'
    WHEN nombre = 'Ácido hialurónico' THEN 'Componente natural del tejido conectivo, utilizado en tratamientos de belleza y medicina estética.'
    WHEN nombre = 'Ácido mefenámico' THEN 'AINE utilizado para aliviar el dolor menstrual y otros tipos de dolor.'
    WHEN nombre = 'Ácido nalidíxico' THEN 'Antibiótico utilizado para tratar infecciones del tracto urinario.'
    WHEN nombre = 'Ácido nicotínico' THEN 'Vitamina B3 que se utiliza para tratar deficiencias nutricionales y problemas de colesterol.'
    WHEN nombre = 'Ácido retinoico' THEN 'Derivado de la vitamina A, utilizado en tratamientos tópicos para el acné y el envejecimiento cutáneo.'

    WHEN nombre = 'Ácido tranexámico' THEN 'Antifibrinolítico utilizado para prevenir o controlar el sangrado excesivo.'
    WHEN nombre = 'Ácido undecilénico' THEN 'Antifúngico tópico utilizado para tratar infecciones fúngicas de la piel.'
    WHEN nombre = 'Ácido valproico' THEN 'Antiepiléptico utilizado para tratar convulsiones y trastornos bipolares.'
    WHEN nombre = 'Adenosina' THEN 'Medicamento utilizado para tratar trastornos del ritmo cardíaco, como la taquicardia supraventricular paroxística.'
    WHEN nombre = 'Adrenalina' THEN 'Hormona y neurotransmisor utilizada para tratar reacciones alérgicas graves y para reanimación en emergencias médicas.'
    WHEN nombre = 'Agua oxigenada' THEN 'Antiséptico tópico utilizado para limpiar heridas y ayudar en la eliminación de tejido muerto.'
    WHEN nombre = 'Albendazol' THEN 'Antihelmíntico utilizado para tratar infecciones parasitarias como la equinococosis y la estrongiloidiasis.'
    WHEN nombre = 'Alendronato' THEN 'Bifosfonato utilizado para tratar y prevenir la osteoporosis en mujeres posmenopáusicas y en hombres.'
    WHEN nombre = 'Alfuzosina' THEN 'Bloqueador de los receptores alfa-1 utilizado para tratar los síntomas del agrandamiento de la próstata.'
    WHEN nombre = 'Alprazolam' THEN 'Ansiolítico de la clase de las benzodiazepinas utilizado para tratar trastornos de ansiedad y pánico.'
    WHEN nombre = 'Amantadina' THEN 'Antiviral utilizado para tratar y prevenir la influenza A y para tratar la enfermedad de Parkinson.'
    WHEN nombre = 'Ambroxol' THEN 'Mucolítico utilizado para tratar la tos asociada con enfermedades respiratorias como el resfriado y la gripe.'
    WHEN nombre = 'Amikacina' THEN 'Antibiótico aminoglucósido utilizado para tratar infecciones bacterianas graves.'
    WHEN nombre = 'Amilorida' THEN 'Diurético ahorrador de potasio utilizado solo o en combinación con otros diuréticos para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Amlodipino' THEN 'Bloqueador de los canales de calcio utilizado para tratar la hipertensión y la enfermedad coronaria.'
    WHEN nombre = 'Amoxicilina' THEN 'Antibiótico betalactámico utilizado para tratar una variedad de infecciones bacterianas.'
    WHEN nombre = 'Amoxicilina/clavulánico' THEN 'Antibiótico combinado utilizado para tratar infecciones bacterianas donde se sospecha resistencia a la amoxicilina sola.'
    WHEN nombre = 'Disulfiram' THEN 'Medicamento utilizado para tratar el alcoholismo al provocar una reacción desagradable al consumir alcohol.'
    WHEN nombre = 'Dobutamina' THEN 'Agonista adrenérgico utilizado para tratar insuficiencia cardíaca aguda.'
    WHEN nombre = 'Domperidona' THEN 'Agonista de los receptores de dopamina utilizado para tratar náuseas y vómitos.'
    
	WHEN nombre = 'Dopamina' THEN 'Neurotransmisor y medicamento utilizado para tratar la hipotensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Dorzolamida' THEN 'Inhibidor de la anhidrasa carbónica utilizado para reducir la presión intraocular en el glaucoma.'
    WHEN nombre = 'Doxazosina' THEN 'Bloqueador de los receptores alfa-1 utilizado para tratar la hipertensión y los síntomas de la hiperplasia prostática benigna.'
    WHEN nombre = 'Doxiciclina' THEN 'Antibiótico tetraciclina utilizado para tratar una amplia variedad de infecciones bacterianas.'
    WHEN nombre = 'Ebastina' THEN 'Antihistamínico utilizado para tratar los síntomas de la alergia estacional y crónica.'
    WHEN nombre = 'Eflornitina' THEN 'Medicamento utilizado para reducir el crecimiento del vello no deseado en el tratamiento de la hirsutismo facial.'
    WHEN nombre = 'Efedrina' THEN 'Agonista adrenérgico utilizado para tratar el asma, la hipotensión y la congestión nasal.'
    WHEN nombre = 'Enalapril' THEN 'Inhibidor de la enzima convertidora de angiotensina (IECA) utilizado para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Enoxaparina' THEN 'Anticoagulante de bajo peso molecular utilizado para prevenir la formación de coágulos sanguíneos.'
    WHEN nombre = 'Entacapona' THEN 'Inhibidor de la catecol-O-metiltransferasa (COMT) utilizado en combinación con levodopa y carbidopa para tratar la enfermedad de Parkinson.'
    WHEN nombre = 'Enzimas pancreáticas' THEN 'Suplemento que contiene enzimas pancreáticas utilizadas para mejorar la digestión en personas con insuficiencia pancreática.'
    WHEN nombre = 'Eritromicina' THEN 'Antibiótico macrólido utilizado para tratar una variedad de infecciones bacterianas.'
    WHEN nombre = 'Ertapenem' THEN 'Antibiótico carbapenémico utilizado para tratar infecciones bacterianas graves.'
    WHEN nombre = 'Escitalopram' THEN 'Antidepresivo inhibidor selectivo de la recaptación de serotonina (ISRS) utilizado para tratar la depresión y los trastornos de ansiedad.'
    WHEN nombre = 'Esomeprazol' THEN 'Inhibidor de la bomba de protones utilizado para tratar la enfermedad por reflujo gastroesofágico (ERGE) y las úlceras pépticas.'
    WHEN nombre = 'Estanozolol' THEN 'Esteroide anabólico utilizado para aumentar la masa muscular y mejorar el rendimiento atlético.'
    WHEN nombre = 'Estradiol' THEN 'Hormona sexual femenina que se utiliza en terapia hormonal para tratar síntomas de la menopausia y prevenir la osteoporosis.'
    WHEN nombre = 'Estramustina' THEN 'Medicamento que combina estrógenos con un agente quimioterapéutico utilizado para tratar el cáncer de próstata.'
    WHEN nombre = 'Estrógenos conjugados' THEN 'Terapia hormonal que contiene una mezcla de estrógenos utilizada para tratar los síntomas de la menopausia.'

	WHEN nombre = 'Estrogénico' THEN 'Sustancia que actúa como estrógeno, una hormona sexual femenina, utilizada en terapia hormonal.'
    WHEN nombre = 'Estrogénico conjugado' THEN 'Terapia hormonal que contiene una mezcla de estrógenos utilizada para tratar los síntomas de la menopausia.'
    WHEN nombre = 'Etinilestradiol' THEN 'Estrogeno sintético utilizado en anticonceptivos orales y en terapia hormonal.'
    WHEN nombre = 'Etosuximida' THEN 'Anticonvulsivo utilizado para tratar la epilepsia, especialmente las convulsiones de ausencia.'
    WHEN nombre = 'Etretinato' THEN 'Derivado de la vitamina A utilizado en el tratamiento de la psoriasis y el acné grave.'
    WHEN nombre = 'Eucaliptol' THEN 'Componente del aceite de eucalipto utilizado en preparaciones para aliviar la congestión nasal y el dolor de garganta.'
    WHEN nombre = 'Ezetimiba' THEN 'Inhibidor de la absorción de colesterol utilizado para tratar la hipercolesterolemia.'
    WHEN nombre = 'Famotidina' THEN 'Antagonista del receptor H2 utilizado para tratar úlceras gástricas y enfermedades relacionadas con el ácido gástrico.'
    WHEN nombre = 'Fenilefrina' THEN 'Agonista adrenérgico utilizado como descongestionante nasal y para elevar la presión arterial en casos de hipotensión.'
    WHEN nombre = 'Fenitoína' THEN 'Anticonvulsivo utilizado para tratar las convulsiones epilépticas y la arritmia cardíaca.'
    WHEN nombre = 'Fenobarbital' THEN 'Barbitúrico utilizado como anticonvulsivo y sedante.'
    WHEN nombre = 'Fenoxibenzamina' THEN 'Bloqueador alfa-adrenérgico utilizado para tratar la hipertensión y los síntomas de feocromocitoma.'
    WHEN nombre = 'Fenoximetilpenicilina' THEN 'Antibiótico penicilínico utilizado para tratar infecciones bacterianas comunes.'
    WHEN nombre = 'Fenilefrina' THEN 'Agonista adrenérgico utilizado como descongestionante nasal y para elevar la presión arterial en casos de hipotensión.'
    WHEN nombre = 'Fenilpropanolamina' THEN 'Agonista adrenérgico utilizado como descongestionante nasal y supresor del apetito.'
    WHEN nombre = 'Fenitoina' THEN 'Anticonvulsivo utilizado para tratar las convulsiones epilépticas y la arritmia cardíaca.'
    WHEN nombre = 'Fentanilo' THEN 'Analgésico opioide utilizado para tratar el dolor severo, como el dolor postoperatorio.'
    WHEN nombre = 'Fexofenadina' THEN 'Antihistamínico utilizado para tratar los síntomas de la alergia, como la fiebre del heno y la urticaria.'
    WHEN nombre = 'Finasterida' THEN 'Inhibidor de la 5-alfa reductasa utilizado para tratar la hiperplasia prostática benigna y la pérdida de cabello.'
    WHEN nombre = 'Flavoxato' THEN 'Antiespasmódico utilizado para tratar la vejiga hiperactiva y los síntomas de la cistitis.'
    
     WHEN nombre = 'Flavoxato' THEN 'Antiespasmódico utilizado para tratar la vejiga hiperactiva y los síntomas de la cistitis.'
    WHEN nombre = 'Fluconazol' THEN 'Antifúngico utilizado para tratar infecciones fúngicas, incluyendo candidiasis vaginal, oral y esofágica.'
    WHEN nombre = 'Fluoxetina' THEN 'Antidepresivo inhibidor selectivo de la recaptación de serotonina (ISRS) utilizado para tratar la depresión, el trastorno obsesivo-compulsivo y otros trastornos de ansiedad.'
    WHEN nombre = 'Fluticasona' THEN 'Corticosteroide inhalado utilizado para tratar el asma y la enfermedad pulmonar obstructiva crónica (EPOC).'
    WHEN nombre = 'Foliculina' THEN 'Hormona estimulante de los folículos utilizada en tratamientos de fertilidad.'
    WHEN nombre = 'Folínico' THEN 'Forma activa del ácido fólico utilizada en el tratamiento de la deficiencia de folato y en la quimioterapia.'
    WHEN nombre = 'Furosemida' THEN 'Diurético de asa utilizado para tratar la retención de líquidos asociada con insuficiencia cardíaca, cirrosis hepática y enfermedad renal.'
    WHEN nombre = 'Gabapentina' THEN 'Anticonvulsivo y analgésico utilizado para tratar la epilepsia, el dolor neuropático y el trastorno de ansiedad.'
    WHEN nombre = 'Ganciclovir' THEN 'Antiviral utilizado para tratar infecciones causadas por el citomegalovirus (CMV) en pacientes inmunocomprometidos.'
    WHEN nombre = 'Gatifloxacino' THEN 'Antibiótico fluoroquinolona utilizado para tratar infecciones bacterianas del ojo, oído, senos paranasales y tracto respiratorio.'
    WHEN nombre = 'Gemfibrozilo' THEN 'Agente hipolipemiante utilizado para reducir los niveles de lípidos en sangre y prevenir enfermedades cardiovasculares.'
    WHEN nombre = 'Gentamicina' THEN 'Antibiótico aminoglucósido utilizado para tratar infecciones bacterianas graves.'
    WHEN nombre = 'Ginkgo biloba' THEN 'Suplemento herbario utilizado para mejorar la memoria, la función cognitiva y la circulación sanguínea.'
    WHEN nombre = 'Glicazida' THEN 'Antidiabético sulfonilurea utilizado para tratar la diabetes tipo 2 al reducir los niveles de azúcar en la sangre.'
    WHEN nombre = 'Glimepirida' THEN 'Antidiabético sulfonilurea utilizado para tratar la diabetes tipo 2 al reducir los niveles de azúcar en la sangre.'
    WHEN nombre = 'Glipizida' THEN 'Antidiabético sulfonilurea utilizado para tratar la diabetes tipo 2 al reducir los niveles de azúcar en la sangre.'
    WHEN nombre = 'Glicerol' THEN 'Laxante osmótico utilizado para tratar el estreñimiento ocasional y como supositorio rectal.'
    WHEN nombre = 'Glucagón' THEN 'Hormona hiperglucemiante utilizada para aumentar los niveles de glucosa en sangre en casos de hipoglucemia severa.'
    WHEN nombre = 'Glucosamina' THEN 'Suplemento utilizado para tratar la osteoartritis al ayudar a reparar y formar cartílago articular.'
    WHEN nombre = 'Glutaraldehído' THEN 'Desinfectante y esterilizante utilizado en soluciones para la desinfección de instrumentos médicos y equipos.'
    WHEN nombre = 'Gonadotropina' THEN 'Hormona utilizada en tratamientos de fertilidad para estimular la ovulación en mujeres y la producción de esperma en hombres.'
    
     WHEN nombre = 'Granisetron' THEN 'Antagonista del receptor de serotonina utilizado para prevenir y tratar las náuseas y vómitos inducidos por la quimioterapia.'
    WHEN nombre = 'Griseofulvina' THEN 'Antifúngico utilizado para tratar infecciones fúngicas de la piel, el cabello y las uñas.'
    WHEN nombre = 'Guanfacina' THEN 'Agonista alfa-2 adrenérgico utilizado para tratar el trastorno por déficit de atención e hiperactividad (TDAH) y la hipertensión.'
    WHEN nombre = 'Haloperidol' THEN 'Antipsicótico utilizado para tratar trastornos psicóticos como la esquizofrenia y el trastorno bipolar.'
    WHEN nombre = 'Heparina' THEN 'Anticoagulante utilizado para prevenir la formación de coágulos sanguíneos y tratar la trombosis.'
    WHEN nombre = 'Hidralazina' THEN 'Vasodilatador utilizado para tratar la hipertensión y la insuficiencia cardíaca congestiva.'
    WHEN nombre = 'Hidroclorotiazida' THEN 'Diurético utilizado para tratar la hipertensión y la retención de líquidos asociada con insuficiencia cardíaca y cirrosis hepática.'
    WHEN nombre = 'Hidrocortisona' THEN 'Corticosteroide utilizado para tratar una variedad de condiciones inflamatorias y alérgicas.'
    WHEN nombre = 'Hidróxido de aluminio' THEN 'Antiácido utilizado para aliviar el ardor de estómago y tratar la indigestión ácida.'
    WHEN nombre = 'Hidróxido de magnesio' THEN 'Antiácido y laxante utilizado para aliviar el ardor de estómago, la indigestión y el estreñimiento ocasional.'
    WHEN nombre = 'Hidroxicloroquina' THEN 'Antipalúdico y antiinflamatorio utilizado para tratar la malaria, el lupus eritematoso sistémico y la artritis reumatoide.'
    WHEN nombre = 'Hidroxicobalamina' THEN 'Forma natural de vitamina B12 utilizada para tratar la deficiencia de vitamina B12 y ciertas anemias.'
    WHEN nombre = 'Hidroxipropilmetilcelulosa' THEN 'Lubricante ocular utilizado para aliviar la sequedad y la irritación ocular asociada con el síndrome del ojo seco.'
    WHEN nombre = 'Hidroxiprogesterona' THEN 'Hormona utilizada en la terapia de reemplazo hormonal y para prevenir el parto prematuro.'
    WHEN nombre = 'Hidroxiurea' THEN 'Agente quimioterapéutico utilizado para tratar ciertos tipos de cáncer de sangre y trastornos de la médula ósea.'
    WHEN nombre = 'Hidroxicina' THEN 'Antihistamínico utilizado para tratar la ansiedad, el prurito y como premedicación antes de la anestesia.'
    WHEN nombre = 'Hidroxizina' THEN 'Antihistamínico utilizado para tratar la ansiedad, el prurito y como premedicación antes de la anestesia.'
    WHEN nombre = 'Hierro' THEN 'Suplemento utilizado para tratar y prevenir la deficiencia de hierro y la anemia.'
    WHEN nombre = 'Ibuprofeno' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para aliviar el dolor, la fiebre y la inflamación.'
    WHEN nombre = 'Idursulfasa' THEN 'Enzima utilizada en el tratamiento de la enfermedad de almacenamiento de mucopolisacáridos tipo II (síndrome de Hunter).'
    
    WHEN nombre = 'Ifosfamida' THEN 'Agente quimioterapéutico utilizado para tratar varios tipos de cáncer, incluyendo cáncer de ovario y cáncer de vejiga.'
    WHEN nombre = 'Imatinib' THEN 'Inhibidor de la tirosina quinasa utilizado para tratar ciertos tipos de leucemia y tumores gastrointestinales.'
    WHEN nombre = 'Imipramina' THEN 'Antidepresivo tricíclico utilizado para tratar la depresión, el trastorno de pánico y la enuresis infantil.'
    WHEN nombre = 'Indapamida' THEN 'Diurético utilizado para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Indometacina' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para tratar el dolor, la inflamación y la fiebre.'
    WHEN nombre = 'Inmunoglobulina' THEN 'Proteína utilizada para tratar una variedad de trastornos inmunológicos, incluyendo deficiencias inmunitarias y trastornos autoinmunes.'
    WHEN nombre = 'Insulina' THEN 'Hormona utilizada para tratar la diabetes al regular los niveles de azúcar en sangre.'
    WHEN nombre = 'Ipratropio' THEN 'Broncodilatador utilizado para tratar la enfermedad pulmonar obstructiva crónica (EPOC) y el asma.'
    WHEN nombre = 'Irbesartán' THEN 'Antagonista del receptor de angiotensina II utilizado para tratar la hipertensión y la nefropatía diabética.'
    WHEN nombre = 'Isoniazida' THEN 'Antibiótico utilizado para tratar la tuberculosis.'
    WHEN nombre = 'Itraconazol' THEN 'Antifúngico triazólico utilizado para tratar infecciones fúngicas sistémicas y superficiales.'
    WHEN nombre = 'Ketamina' THEN 'Anestésico disociativo utilizado para la anestesia general y el alivio del dolor.'
    WHEN nombre = 'Ketorolaco' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para el alivio a corto plazo del dolor moderado a severo.'
    WHEN nombre = 'Labetalol' THEN 'Bloqueador de los receptores adrenérgicos alfa y beta utilizado para tratar la hipertensión.'
    WHEN nombre = 'Lacosamida' THEN 'Antiepiléptico utilizado para tratar convulsiones parciales en adultos y adolescentes.'
    WHEN nombre = 'Lamivudina' THEN 'Antiviral utilizado para tratar la infección crónica por el virus de la hepatitis B y el VIH.'
    WHEN nombre = 'Lamotrigina' THEN 'Antiepiléptico utilizado para tratar convulsiones y trastorno bipolar.'
    WHEN nombre = 'Lansoprazol' THEN 'Inhibidor de la bomba de protones utilizado para tratar el reflujo ácido y las úlceras pépticas.'
    WHEN nombre = 'Latanoprost' THEN 'Análogo de prostaglandina utilizado para tratar el glaucoma y la hipertensión ocular.'
    WHEN nombre = 'Leucovorina' THEN 'Forma activa del ácido fólico utilizada en combinación con algunos agentes quimioterapéuticos.'
    
    WHEN nombre = 'Levamisol' THEN 'Antihelmíntico y estimulante inmunológico utilizado para tratar infecciones parasitarias y ciertos trastornos autoinmunes.'
    WHEN nombre = 'Levobunolol' THEN 'Agonista beta-adrenérgico utilizado para reducir la presión intraocular en el glaucoma.'
    WHEN nombre = 'Levocarnitina' THEN 'Suplemento nutricional utilizado para tratar la deficiencia de carnitina y ciertas enfermedades metabólicas.'
    WHEN nombre = 'Levocetirizina' THEN 'Antihistamínico utilizado para tratar los síntomas de la alergia, como la rinitis alérgica y la urticaria.'
    WHEN nombre = 'Levodopa' THEN 'Precursor de la dopamina utilizado en el tratamiento de la enfermedad de Parkinson para aliviar los síntomas motores.'
    WHEN nombre = 'Levofloxacino' THEN 'Antibiótico fluoroquinolona utilizado para tratar infecciones bacterianas del tracto respiratorio, urinario y piel.'
    WHEN nombre = 'Levonorgestrel' THEN 'Progestágeno utilizado en anticonceptivos orales, dispositivos intrauterinos y en el tratamiento de la endometriosis.'
    WHEN nombre = 'Lidocaína' THEN 'Anestésico local utilizado para adormecer áreas del cuerpo durante procedimientos médicos o dentales.'
    WHEN nombre = 'Liofilizado de factor VIII' THEN 'Concentrado de factor de coagulación utilizado para tratar la hemofilia A.'
    WHEN nombre = 'Lisinopril' THEN 'Inhibidor de la enzima convertidora de angiotensina (IECA) utilizado para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Lítio' THEN 'Estabilizador del estado de ánimo utilizado para tratar trastornos bipolares y prevenir episodios de manía o depresión.'
    WHEN nombre = 'Loratadina' THEN 'Antihistamínico utilizado para tratar los síntomas de la alergia, como la fiebre del heno y la urticaria.'
    WHEN nombre = 'Losartán' THEN 'Antagonista del receptor de angiotensina II utilizado para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Lovastatina' THEN 'Inhibidor de la HMG-CoA reductasa utilizado para reducir los niveles de colesterol y prevenir enfermedades cardiovasculares.'
    WHEN nombre = 'Loxapina' THEN 'Antipsicótico utilizado para tratar trastornos psicóticos como la esquizofrenia y el trastorno bipolar.'
    WHEN nombre = 'Mafenida' THEN 'Antibiótico tópico utilizado para prevenir y tratar infecciones en quemaduras.'
    WHEN nombre = 'Magnesio' THEN 'Suplemento utilizado para tratar y prevenir la deficiencia de magnesio y para trastornos como la preclampsia.'
    WHEN nombre = 'Magnesio trisilicato' THEN 'Antiácido utilizado para aliviar el ardor de estómago, la indigestión y el malestar estomacal.'
    WHEN nombre = 'Manitol' THEN 'Diurético osmótico utilizado para reducir la presión intracraneal y tratar la intoxicación por sobredosis de drogas.'
    WHEN nombre = 'Maprotilina' THEN 'Antidepresivo tricíclico utilizado para tratar la depresión mayor y los trastornos de ansiedad.'
    
    WHEN nombre = 'Meclofenamato' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para tratar el dolor y la inflamación en condiciones como la artritis.'
    WHEN nombre = 'Medroxiprogesterona' THEN 'Progestina utilizada en anticonceptivos hormonales, en el tratamiento de trastornos menstruales y en la terapia hormonal.'
    WHEN nombre = 'Megestrol' THEN 'Progestágeno utilizado en el tratamiento del cáncer de mama y del cáncer endometrial, y para estimular el apetito en pacientes con cáncer.'
    WHEN nombre = 'Meloxicam' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para tratar el dolor y la inflamación en condiciones como la osteoartritis.'
    WHEN nombre = 'Memantina' THEN 'Antagonista del receptor de NMDA utilizado en el tratamiento del Alzheimer y otros trastornos de la función cognitiva.'
    WHEN nombre = 'Menadiona' THEN 'Forma sintética de la vitamina K utilizada para tratar y prevenir la deficiencia de vitamina K.'
    WHEN nombre = 'Mentol' THEN 'Analgésico tópico y agente refrescante utilizado para aliviar la picazón, el dolor y la irritación de la piel y las membranas mucosas.'
    WHEN nombre = 'Meropenem' THEN 'Antibiótico carbapenémico utilizado para tratar infecciones bacterianas graves.'
    WHEN nombre = 'Metadona' THEN 'Agonista opioide utilizado en el tratamiento del dolor crónico y la dependencia de opiáceos.'
    WHEN nombre = 'Metamizol' THEN 'Analgésico y antipirético utilizado para tratar el dolor moderado a severo y la fiebre.'
    WHEN nombre = 'Metformina' THEN 'Antidiabético oral utilizado para tratar la diabetes tipo 2 al reducir los niveles de glucosa en la sangre.'
    WHEN nombre = 'Metilfenidato' THEN 'Estimulante del sistema nervioso central utilizado en el tratamiento del trastorno por déficit de atención e hiperactividad (TDAH).'
    WHEN nombre = 'Metilprednisolona' THEN 'Corticosteroide utilizado en el tratamiento de una variedad de condiciones inflamatorias y alérgicas.'
    WHEN nombre = 'Metoclopramida' THEN 'Agonista de los receptores de dopamina utilizado para tratar las náuseas y los vómitos, y para mejorar la motilidad gastrointestinal.'
    WHEN nombre = 'Metoprolol' THEN 'Bloqueador beta utilizado para tratar la hipertensión, la angina de pecho, el infarto de miocardio y la insuficiencia cardíaca.'
    WHEN nombre = 'Metronidazol' THEN 'Antibiótico y antiprotozoario utilizado para tratar infecciones bacterianas y parasitarias.'
    WHEN nombre = 'Mexiletina' THEN 'Antiarrítmico utilizado para tratar ciertos trastornos del ritmo cardíaco, como la taquicardia ventricular.'
    WHEN nombre = 'Midazolam' THEN 'Benzodiazepina utilizada como sedante, hipnótico, ansiolítico y como premedicación antes de la anestesia.'
    WHEN nombre = 'Mifepristona' THEN 'Antagonista de la progesterona utilizado para la interrupción del embarazo temprano y en combinación con misoprostol para el aborto médico.'
    WHEN nombre = 'Milrinona' THEN 'Inhibidor de la fosfodiesterasa utilizado para tratar la insuficiencia cardíaca aguda y crónica.'
    
	WHEN nombre = 'Minociclina' THEN 'Antibiótico de la familia de las tetraciclinas utilizado para tratar infecciones bacterianas.'
    WHEN nombre = 'Minoxidil' THEN 'Vasodilatador utilizado en el tratamiento de la pérdida de cabello y la hipertensión.'
    WHEN nombre = 'Mirabegron' THEN 'Agonista beta-3 adrenérgico utilizado para tratar la vejiga hiperactiva.'
    WHEN nombre = 'Mirtazapina' THEN 'Antidepresivo utilizado en el tratamiento de la depresión mayor y trastornos de ansiedad.'
    WHEN nombre = 'Misoprostol' THEN 'Análogo de la prostaglandina utilizado para prevenir úlceras gástricas y para inducir el aborto médico.'
    WHEN nombre = 'Mitomicina' THEN 'Agente quimioterapéutico utilizado para tratar diversos tipos de cáncer, incluidos el cáncer de vejiga y el cáncer de pulmón.'
    WHEN nombre = 'Mitoxantrona' THEN 'Agente quimioterapéutico utilizado para tratar la leucemia y el cáncer de mama metastásico.'
    WHEN nombre = 'Modafinilo' THEN 'Estimulante del sistema nervioso central utilizado para tratar la somnolencia excesiva asociada con la narcolepsia y otros trastornos del sueño.'
    WHEN nombre = 'Montelukast' THEN 'Antagonista del receptor de leucotrienos utilizado para tratar el asma y los síntomas de la rinitis alérgica.'
    WHEN nombre = 'Morfina' THEN 'Analgésico opioide utilizado para tratar el dolor moderado a severo.'
    WHEN nombre = 'Nabumetona' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para tratar el dolor y la inflamación en condiciones como la artritis.'
    WHEN nombre = 'Nadolol' THEN 'Bloqueador beta no selectivo utilizado para tratar la hipertensión y la angina de pecho.'
    WHEN nombre = 'Naproxeno' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para aliviar el dolor y la inflamación en condiciones como la artritis y la tendinitis.'
    WHEN nombre = 'Nebivolol' THEN 'Bloqueador beta selectivo utilizado para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Neomicina' THEN 'Antibiótico aminoglucósido utilizado para tratar infecciones bacterianas, especialmente en el tracto gastrointestinal.'
    WHEN nombre = 'Neostigmina' THEN 'Agente colinérgico utilizado para tratar la miastenia gravis y revertir los efectos de los relajantes musculares.'
    WHEN nombre = 'Nevirapina' THEN 'Antirretroviral utilizado en el tratamiento de la infección por el VIH.'
    WHEN nombre = 'Nicergolina' THEN 'Derivado del ergot utilizado en el tratamiento de trastornos circulatorios periféricos y en la demencia vascular.'
    WHEN nombre = 'Nifedipino' THEN 'Bloqueador de los canales de calcio utilizado para tratar la angina de pecho y la hipertensión.'
    WHEN nombre = 'Nilotinib' THEN 'Inhibidor de la tirosina quinasa utilizado en el tratamiento de la leucemia mieloide crónica.'
    
	WHEN nombre = 'Nimodipino' THEN 'Bloqueador de los canales de calcio utilizado para tratar el vasoespasmo cerebral después de un sangrado subaracnoideo.'
    WHEN nombre = 'Nitrazepam' THEN 'Benzodiazepina utilizada principalmente como hipnótico para el tratamiento del insomnio.'
    WHEN nombre = 'Nitrofurantoína' THEN 'Antibiótico utilizado para tratar infecciones del tracto urinario.'
    WHEN nombre = 'Nitroglicerina' THEN 'Vasodilatador utilizado para tratar la angina de pecho y para prevenir los ataques cardíacos.'
    WHEN nombre = 'Nitroprusiato' THEN 'Agente vasodilatador utilizado para tratar la hipertensión severa y la insuficiencia cardíaca congestiva aguda.'
    WHEN nombre = 'Nizatidina' THEN 'Antagonista del receptor H2 utilizado para reducir la producción de ácido en el estómago y tratar la úlcera péptica y la enfermedad por reflujo gastroesofágico.'
    WHEN nombre = 'Norepinefrina' THEN 'Neurotransmisor y hormona utilizada para aumentar la presión arterial en situaciones de shock y para tratar la hipotensión.'
    WHEN nombre = 'Norfloxacino' THEN 'Antibiótico fluoroquinolona utilizado para tratar infecciones bacterianas del tracto urinario y de la próstata.'
    WHEN nombre = 'Nortriptilina' THEN 'Antidepresivo tricíclico utilizado para tratar la depresión mayor y el trastorno de pánico.'
    WHEN nombre = 'Novobiocina' THEN 'Antibiótico utilizado principalmente en pruebas de sensibilidad para determinar la resistencia bacteriana.'
    WHEN nombre = 'Olanzapina' THEN 'Antipsicótico atípico utilizado para tratar la esquizofrenia y el trastorno bipolar.'
    WHEN nombre = 'Omeprazol' THEN 'Inhibidor de la bomba de protones utilizado para tratar el reflujo ácido, las úlceras pépticas y la enfermedad por reflujo gastroesofágico.'
    WHEN nombre = 'Ondansetrón' THEN 'Antagonista del receptor de serotonina utilizado para prevenir las náuseas y los vómitos inducidos por la quimioterapia y la radioterapia, y para tratar la enfermedad de la mañana.'
    WHEN nombre = 'Orfenadrina' THEN 'Relajante muscular utilizado para aliviar el dolor y la rigidez muscular asociados con lesiones musculoesqueléticas.'
    WHEN nombre = 'Orlistat' THEN 'Inhibidor de la lipasa gastrointestinal utilizado para tratar la obesidad al reducir la absorción de grasas en el cuerpo.'
    WHEN nombre = 'Oseltamivir' THEN 'Antiviral utilizado para tratar y prevenir la influenza (gripe).'
    WHEN nombre = 'Oxaliplatino' THEN 'Agente quimioterapéutico de platino utilizado para tratar el cáncer colorrectal y otros cánceres.'
    WHEN nombre = 'Oxcarbazepina' THEN 'Antiepiléptico utilizado para tratar las convulsiones y el trastorno bipolar.'
    WHEN nombre = 'Oxibuprocaína' THEN 'Anestésico local utilizado principalmente en oftalmología para adormecer el ojo antes de procedimientos.'
    WHEN nombre = 'Oximetazolina' THEN 'Agonista alfa-adrenérgico utilizado como descongestionante nasal en el tratamiento de la congestión nasal.'
    
        WHEN nombre = 'Oxímetro de pulso' THEN 'Dispositivo médico utilizado para medir la saturación de oxígeno en la sangre y la frecuencia del pulso.'
    WHEN nombre = 'Oxitocina' THEN 'Hormona utilizada para inducir el parto, aumentar la contracción uterina durante el trabajo de parto y controlar la hemorragia postparto.'
    WHEN nombre = 'Oxígeno' THEN 'Gas esencial para el metabolismo celular y utilizado en el tratamiento de la hipoxia y la insuficiencia respiratoria.'
    WHEN nombre = 'Oxitriptán' THEN 'Agonista serotoninérgico utilizado principalmente para el tratamiento de la migraña.'
    WHEN nombre = 'Paclitaxel' THEN 'Agente quimioterapéutico utilizado para tratar varios tipos de cáncer, incluidos el cáncer de mama, ovario y pulmón.'
    WHEN nombre = 'Palivizumab' THEN 'Anticuerpo monoclonal utilizado para prevenir infecciones por el virus sincitial respiratorio (VSR) en bebés y niños con alto riesgo.'
    WHEN nombre = 'Pantoprazol' THEN 'Inhibidor de la bomba de protones utilizado para tratar el reflujo ácido, las úlceras gástricas y duodenales, y el síndrome de Zollinger-Ellison.'
    WHEN nombre = 'Paracetamol' THEN 'Analgésico y antipirético utilizado para aliviar el dolor leve a moderado y reducir la fiebre.'
    WHEN nombre = 'Paracetamol/codeína' THEN 'Combinación de paracetamol y codeína utilizada para aliviar el dolor moderado a severo.'
    WHEN nombre = 'Paroxetina' THEN 'Antidepresivo inhibidor selectivo de la recaptación de serotonina (ISRS) utilizado para tratar la depresión, el trastorno de ansiedad y el trastorno obsesivo-compulsivo.'
    WHEN nombre = 'Penicilamina' THEN 'Agente quelante utilizado para tratar la intoxicación por metales pesados y ciertos trastornos autoinmunes.'
    WHEN nombre = 'Penicilina G' THEN 'Antibiótico betalactámico utilizado para tratar una variedad de infecciones bacterianas.'
    WHEN nombre = 'Penicilina V' THEN 'Antibiótico betalactámico utilizado para tratar infecciones estreptocócicas y otras infecciones bacterianas.'
    WHEN nombre = 'Pentamidina' THEN 'Antiparasitario utilizado para tratar la neumonía por Pneumocystis jirovecii en pacientes inmunocomprometidos.'
    WHEN nombre = 'Pentosano' THEN 'Agente analgésico y antiinflamatorio utilizado para tratar la cistitis intersticial.'
    WHEN nombre = 'Pentosano polisulfato' THEN 'Agente analgésico y antiinflamatorio utilizado para tratar la cistitis intersticial.'
    WHEN nombre = 'Pentoxifilina' THEN 'Agente vasodilatador utilizado para mejorar la circulación sanguínea en personas con enfermedad arterial periférica.'
    WHEN nombre = 'Perindopril' THEN 'Inhibidor de la enzima convertidora de angiotensina (IECA) utilizado para tratar la hipertensión y la insuficiencia cardíaca.'
    WHEN nombre = 'Permetrina' THEN 'Insecticida y acaricida utilizado para tratar la sarna y los piojos.'
    WHEN nombre = 'Pilocarpina' THEN 'Agonista colinérgico utilizado para tratar el glaucoma y la sequedad bucal.'
     WHEN nombre = 'Pimecrolimus' THEN 'Inmunomodulador utilizado para tratar la dermatitis atópica y el eczema.'
    WHEN nombre = 'Pimozida' THEN 'Antipsicótico utilizado para tratar trastornos psicóticos como la esquizofrenia y el trastorno bipolar.'
    WHEN nombre = 'Pindolol' THEN 'Bloqueador beta no selectivo utilizado para tratar la hipertensión y la angina de pecho.'
    WHEN nombre = 'Piracetam' THEN 'Nootrópico utilizado para mejorar la función cognitiva y tratar trastornos como la demencia y la dislexia.'
    WHEN nombre = 'Pirantel' THEN 'Antihelmíntico utilizado para tratar infecciones parasitarias, especialmente infecciones por lombrices intestinales.'
    WHEN nombre = 'Pirfenidona' THEN 'Antifibrótico utilizado para tratar la fibrosis pulmonar idiopática.'
    WHEN nombre = 'Piridoxina' THEN 'Vitamina B6 utilizada para tratar y prevenir la deficiencia de vitamina B6 y ciertas condiciones médicas.'
    WHEN nombre = 'Piroxicam' THEN 'Antiinflamatorio no esteroideo (AINE) utilizado para aliviar el dolor y la inflamación en condiciones como la artritis.'
    WHEN nombre = 'Polietilenglicol' THEN 'Laxante osmótico utilizado para tratar el estreñimiento.'
    WHEN nombre = 'Polimixina B' THEN 'Antibiótico utilizado para tratar infecciones bacterianas, especialmente infecciones oculares y de la piel.'
    WHEN nombre = 'Polivinilpirrolidona' THEN 'Polímero utilizado como agente aglutinante, espesante y estabilizador en formulaciones farmacéuticas.'
    WHEN nombre = 'Polvo de sulfacetamida' THEN 'Antibiótico utilizado para tratar infecciones oculares bacterianas.'
    WHEN nombre = 'Potasio' THEN 'Electrolito esencial para el funcionamiento normal de las células, nervios y músculos.'
    WHEN nombre = 'Pramipexol' THEN 'Agonista del receptor de dopamina utilizado para tratar la enfermedad de Parkinson y el síndrome de piernas inquietas.'
    WHEN nombre = 'Praziquantel' THEN 'Antihelmíntico utilizado para tratar infecciones parasitarias como la esquistosomiasis y la teniasis.'
    WHEN nombre = 'Prazosina' THEN 'Bloqueador alfa-adrenérgico utilizado para tratar la hipertensión y los síntomas de la hiperplasia prostática benigna.'
    WHEN nombre = 'Prednisona' THEN 'Corticosteroide utilizado para tratar una variedad de condiciones inflamatorias y autoinmunes.'
    WHEN nombre = 'Primidona' THEN 'Antiepiléptico utilizado para tratar convulsiones en el tratamiento de la epilepsia.'
    WHEN nombre = 'Probenecid' THEN 'Agente uricosúrico utilizado para tratar la gota y la hiperuricemia al aumentar la excreción de ácido úrico.'
    WHEN nombre = 'Procainamida' THEN 'Antiarrítmico utilizado para tratar ciertos trastornos del ritmo cardíaco como la fibrilación auricular y la taquicardia ventricular.'
    WHEN nombre = 'Proclorperazina' THEN 'Antipsicótico y antiemético utilizado para tratar la esquizofrenia, el trastorno bipolar y las náuseas y vómitos.'
    WHEN nombre = 'Progesterona' THEN 'Hormona sexual femenina utilizada en anticonceptivos, terapia hormonal y en el apoyo a la reproducción asistida.'
    WHEN nombre = 'Prometazina' THEN 'Antihistamínico y antiemético utilizado para tratar alergias, náuseas y vómitos.'
    WHEN nombre = 'Propafenona' THEN 'Antiarrítmico utilizado para tratar arritmias cardíacas, incluida la fibrilación auricular y la taquicardia ventricular.'
    WHEN nombre = 'Propantelina' THEN 'Antiespasmódico utilizado para tratar los síntomas del síndrome del intestino irritable y otros trastornos gastrointestinales.'
    WHEN nombre = 'Propofol' THEN 'Agente anestésico utilizado para inducir y mantener la anestesia general.'
    WHEN nombre = 'Propoxifeno' THEN 'Analgésico opioide utilizado para aliviar el dolor moderado a severo.'
    WHEN nombre = 'Propoxur' THEN 'Insecticida carbamato utilizado para controlar plagas de insectos y garrapatas.'
    WHEN nombre = 'Propranolol' THEN 'Bloqueador beta utilizado para tratar la hipertensión, la angina de pecho, las arritmias cardíacas y el temblor esencial.'
    WHEN nombre = 'Prostaglandina' THEN 'Hormona y mediador celular utilizado en diversos procesos fisiológicos y como medicamento en obstetricia y oftalmología.'
    WHEN nombre = 'Pseudoefedrina' THEN 'Descongestionante nasal utilizado para aliviar la congestión nasal y los síntomas del resfriado y la gripe.'

    
END;

