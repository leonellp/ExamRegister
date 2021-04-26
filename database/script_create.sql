-- This script was generated by a beta version of the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE public.categoria
(
    idcategoria uuid NOT NULL,
    nome character varying(50) NOT NULL,
    nomecompleto character varying(200) NOT NULL,
    idcategoriapai uuid,
    inativo date,
    idexterno character varying(20) NOT NULL,
    PRIMARY KEY (idcategoria)
);

CREATE TABLE public.categoriaexame
(
    idcategoriaexame uuid NOT NULL,
    idcategoria uuid NOT NULL,
    idexame uuid NOT NULL,
    PRIMARY KEY (idcategoriaexame)
);

CREATE TABLE public.cidade
(
    idcidade uuid NOT NULL,
    nome character varying(50) NOT NULL,
    idestado uuid NOT NULL,
    inativo date,
    PRIMARY KEY (idcidade)
);

CREATE TABLE public.clinica
(
    idclinica uuid NOT NULL,
    email character varying(254) NOT NULL,
    idendereco uuid NOT NULL,
    telefone character varying(15),
    celular character varying(15) NOT NULL,
    inativo date,
    nome character varying(100) NOT NULL,
    idexterno character varying(20) NOT NULL,
    PRIMARY KEY (idclinica)
);

CREATE TABLE public.diagnostico
(
    idexterno character varying(20) NOT NULL,
    iddiagnostico uuid NOT NULL,
    nome character varying(200) NOT NULL,
    inativo date,
    PRIMARY KEY (iddiagnostico)
);

CREATE TABLE public.endereco
(
    idendereco uuid NOT NULL,
    cep character varying(9) NOT NULL,
    bairro character varying(100) NOT NULL,
    rua character varying(100) NOT NULL,
    numero integer NOT NULL,
    complemento character varying(200),
    idcidade uuid NOT NULL,
    idestado uuid NOT NULL,
    inativo date,
    PRIMARY KEY (idendereco)
);

CREATE TABLE public.estado
(
    idestado uuid NOT NULL,
    sigla character(2) NOT NULL,
    nome character varying(50) NOT NULL,
    inativo date,
    PRIMARY KEY (idestado)
);

CREATE TABLE public.exame
(
    idexame uuid NOT NULL,
    idexterno character varying(20) NOT NULL,
    datain date NOT NULL,
    dataout date NOT NULL,
    idpaciente uuid NOT NULL,
    idorgao uuid NOT NULL,
    idpeca uuid NOT NULL,
    idmedicoresp uuid NOT NULL,
    idmedicosolic uuid NOT NULL,
    idreuniao uuid NOT NULL,
    idclinica uuid NOT NULL,
    diagnostico character varying(10000) NOT NULL,
    dadosclinicos character varying(300) NOT NULL,
    suspeitaclinica character varying(300) NOT NULL,
    peso numeric NOT NULL,
    altura numeric NOT NULL,
    ast integer NOT NULL,
    alt integer NOT NULL,
    ggt integer NOT NULL,
    colesterol integer NOT NULL,
    gamaglobulina numeric NOT NULL,
    triglicerides integer NOT NULL,
    glicemia integer NOT NULL,
    falc integer NOT NULL,
    biltotal numeric NOT NULL,
    bildireta numeric NOT NULL,
    outros character varying(300) NOT NULL,
    inativo date,
    idgrupomedico uuid NOT NULL,
    conclusao character varying(300) NOT NULL,
    observacao character varying(300),
    transplantadofigado integer,
    hipertensaoarterial integer,
    ictericia integer,
    ascite integer,
    edema integer,
    circulacaocolateral integer,
    varizesofagicas integer,
    hepatomegalia integer,
    figadoendurecido integer,
    figadonodular integer,
    esplenomegalia integer,
    datatransplante date,
    descdoencaautoimune character varying(200),
    usamedicamento integer,
    descusamedicamento character varying(200),
    autoanticorpos character varying(200),
    vhc integer,
    descvhc integer,
    vhb integer,
    descvhb integer,
    hiv integer,
    deschiv integer,
    doencaautoimune integer,
    PRIMARY KEY (idexame)
);

CREATE TABLE public.examediag
(
    idexamediag uuid NOT NULL,
    idexame uuid NOT NULL,
    iddiag uuid NOT NULL,
    PRIMARY KEY (idexamediag)
);

CREATE TABLE public.examemedicorespdiagnostico
(
    idexmeddiag uuid NOT NULL,
    idmedico uuid NOT NULL,
    idexame uuid NOT NULL,
    PRIMARY KEY (idexmeddiag)
);

CREATE TABLE public.grupodemedico
(
    idgrupodemedicos uuid NOT NULL,
    idexterno character varying(20) NOT NULL,
    nome character varying(100) NOT NULL,
    inativo date,
    PRIMARY KEY (idgrupodemedicos)
);

CREATE TABLE public.historicopaciente
(
    idhispaciente uuid NOT NULL,
    descricao character varying(200) NOT NULL,
    idpaciente uuid NOT NULL,
    data date NOT NULL,
    inativo date,
    PRIMARY KEY (idhispaciente)
);

CREATE TABLE public.imagem
(
    idimagem uuid NOT NULL,
    nome character varying(200),
    url character varying(300) NOT NULL,
    idexame uuid NOT NULL,
    dataupload date NOT NULL,
    inativo date,
    PRIMARY KEY (idimagem)
);

CREATE TABLE public.informacao
(
    idinformacao uuid NOT NULL,
    nome character varying(200) NOT NULL,
    inativo date,
    idexterno character varying(20) NOT NULL,
    PRIMARY KEY (idinformacao)
);

CREATE TABLE public.medico
(
    idmedico uuid NOT NULL,
    nome character varying(200) NOT NULL,
    email character varying(254) NOT NULL,
    celular character varying(15) NOT NULL,
    telefone character varying(15),
    telefone2 character varying(15),
    crm character varying(20),
    inativo date,
    PRIMARY KEY (idmedico)
);

CREATE TABLE public.medicoclinica
(
    idmedcli uuid NOT NULL,
    idmedico uuid NOT NULL,
    idclinica uuid NOT NULL,
    PRIMARY KEY (idmedcli)
);

CREATE TABLE public.medicogrupo
(
    idgrupomedico uuid NOT NULL,
    idgrupo uuid NOT NULL,
    idmedico uuid NOT NULL,
    PRIMARY KEY (idgrupomedico)
);

CREATE TABLE public.orgao
(
    idorgao uuid NOT NULL,
    idexterno character varying(20) NOT NULL,
    nome character varying(50) NOT NULL,
    inativo date,
    PRIMARY KEY (idorgao)
);

CREATE TABLE public.paciente
(
    idpaciente uuid NOT NULL,
    idexterno character varying(20) NOT NULL,
    nome character varying(200) NOT NULL,
    sexo character(1) NOT NULL,
    nascimento date NOT NULL,
    inativo date,
    PRIMARY KEY (idpaciente)
);

CREATE TABLE public.pacienteinformacao
(
    "Idpacienteinformacao" uuid NOT NULL,
    idpaciente uuid NOT NULL,
    idinformacao uuid NOT NULL,
    PRIMARY KEY ("Idpacienteinformacao")
);

CREATE TABLE public.peca
(
    idpeca uuid NOT NULL,
    "nome " character varying(200) NOT NULL,
    inativo date,
    idexterno character varying(20) NOT NULL,
    PRIMARY KEY (idpeca)
);

CREATE TABLE public.reuniao
(
    idrenuiao uuid NOT NULL,
    nome character varying(200) NOT NULL,
    data date NOT NULL,
    idexterno character varying(20) NOT NULL,
    inativo date,
    PRIMARY KEY (idrenuiao)
);

CREATE TABLE public.usuario
(
    idusuario uuid NOT NULL,
    nome character varying(200) NOT NULL,
    "user" character varying(200) NOT NULL,
    password_hash character varying(1000) NOT NULL,
    password_salt character varying(1000) NOT NULL,
    inativo date,
    idexterno character varying(20) NOT NULL,
    PRIMARY KEY (idusuario)
);

ALTER TABLE public.categoria
    ADD FOREIGN KEY (idcategoriapai)
    REFERENCES public.categoria (idcategoria)
    NOT VALID;


ALTER TABLE public.categoriaexame
    ADD FOREIGN KEY (idcategoria)
    REFERENCES public.categoria (idcategoria)
    NOT VALID;


ALTER TABLE public.categoriaexame
    ADD FOREIGN KEY (idexame)
    REFERENCES public.exame (idexame)
    NOT VALID;


ALTER TABLE public.cidade
    ADD FOREIGN KEY (idestado)
    REFERENCES public.estado (idestado)
    NOT VALID;


ALTER TABLE public.clinica
    ADD FOREIGN KEY (idendereco)
    REFERENCES public.endereco (idendereco)
    NOT VALID;


ALTER TABLE public.endereco
    ADD FOREIGN KEY (idcidade)
    REFERENCES public.cidade (idcidade)
    NOT VALID;


ALTER TABLE public.endereco
    ADD FOREIGN KEY (idestado)
    REFERENCES public.estado (idestado)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idclinica)
    REFERENCES public.clinica (idclinica)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idgrupomedico)
    REFERENCES public.grupodemedico (idgrupodemedicos)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idmedicoresp)
    REFERENCES public.medico (idmedico)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idmedicosolic)
    REFERENCES public.medico (idmedico)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idorgao)
    REFERENCES public.orgao (idorgao)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idpaciente)
    REFERENCES public.paciente (idpaciente)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idpeca)
    REFERENCES public.peca (idpeca)
    NOT VALID;


ALTER TABLE public.exame
    ADD FOREIGN KEY (idreuniao)
    REFERENCES public.reuniao (idrenuiao)
    NOT VALID;


ALTER TABLE public.examediag
    ADD FOREIGN KEY (iddiag)
    REFERENCES public.diagnostico (iddiagnostico)
    NOT VALID;


ALTER TABLE public.examediag
    ADD FOREIGN KEY (idexame)
    REFERENCES public.exame (idexame)
    NOT VALID;


ALTER TABLE public.examemedicorespdiagnostico
    ADD FOREIGN KEY (idexame)
    REFERENCES public.exame (idexame)
    NOT VALID;


ALTER TABLE public.examemedicorespdiagnostico
    ADD FOREIGN KEY (idmedico)
    REFERENCES public.medico (idmedico)
    NOT VALID;


ALTER TABLE public.historicopaciente
    ADD FOREIGN KEY (idpaciente)
    REFERENCES public.paciente (idpaciente)
    NOT VALID;


ALTER TABLE public.imagem
    ADD FOREIGN KEY (idexame)
    REFERENCES public.exame (idexame)
    NOT VALID;


ALTER TABLE public.medicoclinica
    ADD FOREIGN KEY (idclinica)
    REFERENCES public.clinica (idclinica)
    NOT VALID;


ALTER TABLE public.medicoclinica
    ADD FOREIGN KEY (idmedico)
    REFERENCES public.medico (idmedico)
    NOT VALID;


ALTER TABLE public.medicogrupo
    ADD FOREIGN KEY (idgrupo)
    REFERENCES public.grupodemedico (idgrupodemedicos)
    NOT VALID;


ALTER TABLE public.medicogrupo
    ADD FOREIGN KEY (idmedico)
    REFERENCES public.medico (idmedico)
    NOT VALID;


ALTER TABLE public.pacienteinformacao
    ADD FOREIGN KEY (idinformacao)
    REFERENCES public.informacao (idinformacao)
    NOT VALID;


ALTER TABLE public.pacienteinformacao
    ADD FOREIGN KEY (idpaciente)
    REFERENCES public.paciente (idpaciente)
    NOT VALID;

END;