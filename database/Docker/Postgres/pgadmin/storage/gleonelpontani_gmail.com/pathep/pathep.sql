PGDMP                          x            pathep    11.2    11.2 M    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    24633    pathep    DATABASE     �   CREATE DATABASE pathep WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE pathep;
             pathep    false            �            1259    24818 	   categoria    TABLE     �   CREATE TABLE public.categoria (
    idcategoria uuid NOT NULL,
    nome character varying(50) NOT NULL,
    nomecompleto character varying(200) NOT NULL,
    idcategoriapai uuid
);
    DROP TABLE public.categoria;
       public         pathep    false            �            1259    24686    cidades    TABLE     �   CREATE TABLE public.cidades (
    idcidade uuid NOT NULL,
    nome character varying(50) NOT NULL,
    idestado uuid NOT NULL
);
    DROP TABLE public.cidades;
       public         pathep    false            �            1259    24650    clinicas    TABLE     �   CREATE TABLE public.clinicas (
    idclinica uuid NOT NULL,
    email character varying(254) NOT NULL,
    idendereco uuid NOT NULL,
    telefone character varying(15) NOT NULL,
    celular character varying(15)
);
    DROP TABLE public.clinicas;
       public         pathep    false            �            1259    24655    endereco    TABLE     8  CREATE TABLE public.endereco (
    idendereco uuid NOT NULL,
    cep character varying(9) NOT NULL,
    bairro character varying(100) NOT NULL,
    rua character varying(100) NOT NULL,
    numero integer NOT NULL,
    complemento character varying(200),
    idcidade uuid NOT NULL,
    idestado uuid NOT NULL
);
    DROP TABLE public.endereco;
       public         postgres    false            �            1259    24681    estados    TABLE     �   CREATE TABLE public.estados (
    idestado uuid NOT NULL,
    sigla character(2) NOT NULL,
    nome character varying(50) NOT NULL
);
    DROP TABLE public.estados;
       public         pathep    false            �            1259    24828    exame_medicoresp_diagnostico    TABLE     �   CREATE TABLE public.exame_medicoresp_diagnostico (
    idexmeddiag uuid NOT NULL,
    idmedico uuid NOT NULL,
    idexame uuid NOT NULL
);
 0   DROP TABLE public.exame_medicoresp_diagnostico;
       public         pathep    false            �            1259    24838    exames    TABLE     .  CREATE TABLE public.exames (
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
    diagnostico character varying(200) NOT NULL,
    idexameddiag uuid NOT NULL,
    idcategoria uuid NOT NULL,
    imagem character varying(200) NOT NULL,
    dadosclinicos character varying(300) NOT NULL,
    suspeitaclinica character varying(200) NOT NULL,
    transplantefigado boolean,
    datatransplante date,
    "icterícia" boolean,
    ascite boolean,
    edemammii boolean,
    circulacaocolateral boolean,
    varizesesofagicas boolean,
    hepatomegalia boolean,
    figadoendurecido boolean,
    figadonodular boolean,
    esplenomegalia boolean,
    peso numeric NOT NULL,
    altura numeric NOT NULL,
    hipertensaoarterial boolean,
    doencaautoimune boolean,
    usamedicamentos boolean,
    ast integer NOT NULL,
    alt integer NOT NULL,
    ggt integer NOT NULL,
    colesterol integer NOT NULL,
    gamaglobulina numeric NOT NULL,
    triglicerides integer NOT NULL,
    autoanticorpos numeric NOT NULL,
    glicemia integer NOT NULL,
    f_alc integer NOT NULL,
    bil_total numeric NOT NULL,
    bil_direta numeric NOT NULL,
    vhc character(1) NOT NULL,
    vhb character(1) NOT NULL,
    hiv character(1) NOT NULL,
    outros character varying(200) NOT NULL,
    idmedicog uuid NOT NULL
);
    DROP TABLE public.exames;
       public         pathep    false            �            1259    24780    historico_paciente    TABLE     �   CREATE TABLE public.historico_paciente (
    idhispaciente uuid NOT NULL,
    descricao character varying(200) NOT NULL,
    idpaciente uuid NOT NULL,
    data date NOT NULL
);
 &   DROP TABLE public.historico_paciente;
       public         pathep    false            �            1259    24790 
   informacao    TABLE     s   CREATE TABLE public.informacao (
    idinformacao uuid NOT NULL,
    informacao character varying(200) NOT NULL
);
    DROP TABLE public.informacao;
       public         pathep    false            �            1259    24634    medicos    TABLE     %  CREATE TABLE public.medicos (
    idmedico uuid NOT NULL,
    nome character varying(200) NOT NULL,
    email character varying(254) NOT NULL,
    celular character varying(15) NOT NULL,
    telefone character varying(15),
    telefone2 character varying(15),
    crm character varying(20)
);
    DROP TABLE public.medicos;
       public         pathep    false            �            1259    24755    medicos_clinicas    TABLE     ~   CREATE TABLE public.medicos_clinicas (
    idmedcli uuid NOT NULL,
    idmedico uuid NOT NULL,
    idclinica uuid NOT NULL
);
 $   DROP TABLE public.medicos_clinicas;
       public         pathep    false            �            1259    24642    orgaos    TABLE     �   CREATE TABLE public.orgaos (
    idorgao uuid NOT NULL,
    idexterno character varying(20) NOT NULL,
    nome character varying(50) NOT NULL
);
    DROP TABLE public.orgaos;
       public         pathep    false            �            1259    24795    paciente_informacao    TABLE     �   CREATE TABLE public.paciente_informacao (
    "Idpacienteinformacao" uuid NOT NULL,
    idpaciente uuid NOT NULL,
    idinformacao uuid NOT NULL
);
 '   DROP TABLE public.paciente_informacao;
       public         pathep    false            �            1259    24775 	   pacientes    TABLE     �   CREATE TABLE public.pacientes (
    idpaciente uuid NOT NULL,
    idexterno character varying(20) NOT NULL,
    nome character varying(200) NOT NULL,
    sexo character(1) NOT NULL,
    nascimento date NOT NULL
);
    DROP TABLE public.pacientes;
       public         pathep    false            �            1259    24770    pecas    TABLE     d   CREATE TABLE public.pecas (
    idpeca uuid NOT NULL,
    "nome " character varying(50) NOT NULL
);
    DROP TABLE public.pecas;
       public         pathep    false            �            1259    24886    reunioes    TABLE     �   CREATE TABLE public.reunioes (
    idrenuiao uuid NOT NULL,
    nome character varying(200) NOT NULL,
    data date NOT NULL,
    idexterno character varying(20) NOT NULL
);
    DROP TABLE public.reunioes;
       public         pathep    false            �            1259    24810    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    idusuario uuid NOT NULL,
    nome character varying(200) NOT NULL,
    usuario character varying(200) NOT NULL,
    password_hash character varying(1000) NOT NULL,
    password_salt character varying(1000) NOT NULL
);
    DROP TABLE public.usuarios;
       public         postgres    false            |          0    24818 	   categoria 
   TABLE DATA               T   COPY public.categoria (idcategoria, nome, nomecompleto, idcategoriapai) FROM stdin;
    public       pathep    false    209   �c       t          0    24686    cidades 
   TABLE DATA               ;   COPY public.cidades (idcidade, nome, idestado) FROM stdin;
    public       pathep    false    201   �c       q          0    24650    clinicas 
   TABLE DATA               S   COPY public.clinicas (idclinica, email, idendereco, telefone, celular) FROM stdin;
    public       pathep    false    198   �c       r          0    24655    endereco 
   TABLE DATA               i   COPY public.endereco (idendereco, cep, bairro, rua, numero, complemento, idcidade, idestado) FROM stdin;
    public       postgres    false    199   �c       s          0    24681    estados 
   TABLE DATA               8   COPY public.estados (idestado, sigla, nome) FROM stdin;
    public       pathep    false    200   d       }          0    24828    exame_medicoresp_diagnostico 
   TABLE DATA               V   COPY public.exame_medicoresp_diagnostico (idexmeddiag, idmedico, idexame) FROM stdin;
    public       pathep    false    210   8d       ~          0    24838    exames 
   TABLE DATA               j  COPY public.exames (idexame, idexterno, datain, dataout, idpaciente, idorgao, idpeca, idmedicoresp, idmedicosolic, idreuniao, idclinica, diagnostico, idexameddiag, idcategoria, imagem, dadosclinicos, suspeitaclinica, transplantefigado, datatransplante, "icterícia", ascite, edemammii, circulacaocolateral, varizesesofagicas, hepatomegalia, figadoendurecido, figadonodular, esplenomegalia, peso, altura, hipertensaoarterial, doencaautoimune, usamedicamentos, ast, alt, ggt, colesterol, gamaglobulina, triglicerides, autoanticorpos, glicemia, f_alc, bil_total, bil_direta, vhc, vhb, hiv, outros, idmedicog) FROM stdin;
    public       pathep    false    211   Ud       x          0    24780    historico_paciente 
   TABLE DATA               X   COPY public.historico_paciente (idhispaciente, descricao, idpaciente, data) FROM stdin;
    public       pathep    false    205   rd       y          0    24790 
   informacao 
   TABLE DATA               >   COPY public.informacao (idinformacao, informacao) FROM stdin;
    public       pathep    false    206   �d       o          0    24634    medicos 
   TABLE DATA               [   COPY public.medicos (idmedico, nome, email, celular, telefone, telefone2, crm) FROM stdin;
    public       pathep    false    196   �d       u          0    24755    medicos_clinicas 
   TABLE DATA               I   COPY public.medicos_clinicas (idmedcli, idmedico, idclinica) FROM stdin;
    public       pathep    false    202   �d       p          0    24642    orgaos 
   TABLE DATA               :   COPY public.orgaos (idorgao, idexterno, nome) FROM stdin;
    public       pathep    false    197   �d       z          0    24795    paciente_informacao 
   TABLE DATA               _   COPY public.paciente_informacao ("Idpacienteinformacao", idpaciente, idinformacao) FROM stdin;
    public       pathep    false    207   e       w          0    24775 	   pacientes 
   TABLE DATA               R   COPY public.pacientes (idpaciente, idexterno, nome, sexo, nascimento) FROM stdin;
    public       pathep    false    204    e       v          0    24770    pecas 
   TABLE DATA               0   COPY public.pecas (idpeca, "nome ") FROM stdin;
    public       pathep    false    203   =e                 0    24886    reunioes 
   TABLE DATA               D   COPY public.reunioes (idrenuiao, nome, data, idexterno) FROM stdin;
    public       pathep    false    212   Ze       {          0    24810    usuarios 
   TABLE DATA               Z   COPY public.usuarios (idusuario, nome, usuario, password_hash, password_salt) FROM stdin;
    public       postgres    false    208   we       �
           2606    24822    categoria categoria_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (idcategoria);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public         pathep    false    209            �
           2606    24690    cidades cidades_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.cidades
    ADD CONSTRAINT cidades_pkey PRIMARY KEY (idcidade);
 >   ALTER TABLE ONLY public.cidades DROP CONSTRAINT cidades_pkey;
       public         pathep    false    201            �
           2606    24654    clinicas clinicas_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.clinicas
    ADD CONSTRAINT clinicas_pkey PRIMARY KEY (idclinica);
 @   ALTER TABLE ONLY public.clinicas DROP CONSTRAINT clinicas_pkey;
       public         pathep    false    198            �
           2606    24659    endereco endereco_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (idendereco);
 @   ALTER TABLE ONLY public.endereco DROP CONSTRAINT endereco_pkey;
       public         postgres    false    199            �
           2606    24685    estados estados_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.estados
    ADD CONSTRAINT estados_pkey PRIMARY KEY (idestado);
 >   ALTER TABLE ONLY public.estados DROP CONSTRAINT estados_pkey;
       public         pathep    false    200            �
           2606    24832 >   exame_medicoresp_diagnostico exame_medicoresp_diagnostico_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.exame_medicoresp_diagnostico
    ADD CONSTRAINT exame_medicoresp_diagnostico_pkey PRIMARY KEY (idexmeddiag);
 h   ALTER TABLE ONLY public.exame_medicoresp_diagnostico DROP CONSTRAINT exame_medicoresp_diagnostico_pkey;
       public         pathep    false    210            �
           2606    24845    exames exames_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT exames_pkey PRIMARY KEY (idexame);
 <   ALTER TABLE ONLY public.exames DROP CONSTRAINT exames_pkey;
       public         pathep    false    211            �
           2606    24784 *   historico_paciente historico_paciente_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.historico_paciente
    ADD CONSTRAINT historico_paciente_pkey PRIMARY KEY (idhispaciente);
 T   ALTER TABLE ONLY public.historico_paciente DROP CONSTRAINT historico_paciente_pkey;
       public         pathep    false    205            �
           2606    24794    informacao informacao_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.informacao
    ADD CONSTRAINT informacao_pkey PRIMARY KEY (idinformacao);
 D   ALTER TABLE ONLY public.informacao DROP CONSTRAINT informacao_pkey;
       public         pathep    false    206            �
           2606    24759 &   medicos_clinicas medicos_clinicas_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.medicos_clinicas
    ADD CONSTRAINT medicos_clinicas_pkey PRIMARY KEY (idmedcli);
 P   ALTER TABLE ONLY public.medicos_clinicas DROP CONSTRAINT medicos_clinicas_pkey;
       public         pathep    false    202            �
           2606    24641    medicos medicos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_pkey PRIMARY KEY (idmedico);
 >   ALTER TABLE ONLY public.medicos DROP CONSTRAINT medicos_pkey;
       public         pathep    false    196            �
           2606    24649    orgaos orgaos_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.orgaos
    ADD CONSTRAINT orgaos_pkey PRIMARY KEY (idorgao);
 <   ALTER TABLE ONLY public.orgaos DROP CONSTRAINT orgaos_pkey;
       public         pathep    false    197            �
           2606    24799 ,   paciente_informacao paciente_informacao_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.paciente_informacao
    ADD CONSTRAINT paciente_informacao_pkey PRIMARY KEY ("Idpacienteinformacao");
 V   ALTER TABLE ONLY public.paciente_informacao DROP CONSTRAINT paciente_informacao_pkey;
       public         pathep    false    207            �
           2606    24779    pacientes pacientes_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (idpaciente);
 B   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_pkey;
       public         pathep    false    204            �
           2606    24774    pecas pecas_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.pecas
    ADD CONSTRAINT pecas_pkey PRIMARY KEY (idpeca);
 :   ALTER TABLE ONLY public.pecas DROP CONSTRAINT pecas_pkey;
       public         pathep    false    203            �
           2606    24890    reunioes reunioes_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.reunioes
    ADD CONSTRAINT reunioes_pkey PRIMARY KEY (idrenuiao);
 @   ALTER TABLE ONLY public.reunioes DROP CONSTRAINT reunioes_pkey;
       public         pathep    false    212            �
           2606    24817    usuarios usuarios_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (idusuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public         postgres    false    208            �
           2606    24881    exames idcategoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idcategoria FOREIGN KEY (idcategoria) REFERENCES public.categoria(idcategoria);
 <   ALTER TABLE ONLY public.exames DROP CONSTRAINT idcategoria;
       public       pathep    false    2777    211    209            �
           2606    24823    categoria idcategoriapai    FK CONSTRAINT     �   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT idcategoriapai FOREIGN KEY (idcategoriapai) REFERENCES public.categoria(idcategoria);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT idcategoriapai;
       public       pathep    false    209    2777    209            �
           2606    24701    endereco idcidade    FK CONSTRAINT     y   ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT idcidade FOREIGN KEY (idcidade) REFERENCES public.cidades(idcidade);
 ;   ALTER TABLE ONLY public.endereco DROP CONSTRAINT idcidade;
       public       postgres    false    199    2761    201            �
           2606    24765    medicos_clinicas idclinica    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicos_clinicas
    ADD CONSTRAINT idclinica FOREIGN KEY (idclinica) REFERENCES public.clinicas(idclinica);
 D   ALTER TABLE ONLY public.medicos_clinicas DROP CONSTRAINT idclinica;
       public       pathep    false    202    2755    198            �
           2606    24871    exames idclinica    FK CONSTRAINT     {   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idclinica FOREIGN KEY (idclinica) REFERENCES public.clinicas(idclinica);
 :   ALTER TABLE ONLY public.exames DROP CONSTRAINT idclinica;
       public       pathep    false    2755    211    198            �
           2606    24706    clinicas idendereco    FK CONSTRAINT     �   ALTER TABLE ONLY public.clinicas
    ADD CONSTRAINT idendereco FOREIGN KEY (idendereco) REFERENCES public.endereco(idendereco);
 =   ALTER TABLE ONLY public.clinicas DROP CONSTRAINT idendereco;
       public       pathep    false    2757    198    199            �
           2606    24691    cidades idestado    FK CONSTRAINT     x   ALTER TABLE ONLY public.cidades
    ADD CONSTRAINT idestado FOREIGN KEY (idestado) REFERENCES public.estados(idestado);
 :   ALTER TABLE ONLY public.cidades DROP CONSTRAINT idestado;
       public       pathep    false    201    200    2759            �
           2606    24696    endereco idestado    FK CONSTRAINT     y   ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT idestado FOREIGN KEY (idestado) REFERENCES public.estados(idestado);
 ;   ALTER TABLE ONLY public.endereco DROP CONSTRAINT idestado;
       public       postgres    false    199    2759    200            �
           2606    32844 $   exame_medicoresp_diagnostico idexame    FK CONSTRAINT     �   ALTER TABLE ONLY public.exame_medicoresp_diagnostico
    ADD CONSTRAINT idexame FOREIGN KEY (idexame) REFERENCES public.exames(idexame);
 N   ALTER TABLE ONLY public.exame_medicoresp_diagnostico DROP CONSTRAINT idexame;
       public       pathep    false    211    2781    210            �
           2606    24876    exames idexameddiag    FK CONSTRAINT     �   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idexameddiag FOREIGN KEY (idexameddiag) REFERENCES public.exame_medicoresp_diagnostico(idexmeddiag);
 =   ALTER TABLE ONLY public.exames DROP CONSTRAINT idexameddiag;
       public       pathep    false    210    211    2779            �
           2606    24805     paciente_informacao idinformacao    FK CONSTRAINT     �   ALTER TABLE ONLY public.paciente_informacao
    ADD CONSTRAINT idinformacao FOREIGN KEY (idinformacao) REFERENCES public.informacao(idinformacao);
 J   ALTER TABLE ONLY public.paciente_informacao DROP CONSTRAINT idinformacao;
       public       pathep    false    206    207    2771            �
           2606    24760    medicos_clinicas idmedico    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicos_clinicas
    ADD CONSTRAINT idmedico FOREIGN KEY (idmedico) REFERENCES public.medicos(idmedico);
 C   ALTER TABLE ONLY public.medicos_clinicas DROP CONSTRAINT idmedico;
       public       pathep    false    196    2751    202            �
           2606    24833 %   exame_medicoresp_diagnostico idmedico    FK CONSTRAINT     �   ALTER TABLE ONLY public.exame_medicoresp_diagnostico
    ADD CONSTRAINT idmedico FOREIGN KEY (idmedico) REFERENCES public.medicos(idmedico);
 O   ALTER TABLE ONLY public.exame_medicoresp_diagnostico DROP CONSTRAINT idmedico;
       public       pathep    false    2751    196    210            �
           2606    32849    exames idmedicog    FK CONSTRAINT     y   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idmedicog FOREIGN KEY (idmedicog) REFERENCES public.medicos(idmedico);
 :   ALTER TABLE ONLY public.exames DROP CONSTRAINT idmedicog;
       public       pathep    false    2751    211    196            �
           2606    24861    exames idmedicoresp    FK CONSTRAINT        ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idmedicoresp FOREIGN KEY (idmedicoresp) REFERENCES public.medicos(idmedico);
 =   ALTER TABLE ONLY public.exames DROP CONSTRAINT idmedicoresp;
       public       pathep    false    211    196    2751            �
           2606    24866    exames idmedsolic    FK CONSTRAINT     ~   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idmedsolic FOREIGN KEY (idmedicosolic) REFERENCES public.medicos(idmedico);
 ;   ALTER TABLE ONLY public.exames DROP CONSTRAINT idmedsolic;
       public       pathep    false    2751    211    196            �
           2606    24851    exames idorgao    FK CONSTRAINT     s   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idorgao FOREIGN KEY (idorgao) REFERENCES public.orgaos(idorgao);
 8   ALTER TABLE ONLY public.exames DROP CONSTRAINT idorgao;
       public       pathep    false    211    2753    197            �
           2606    24785    historico_paciente idpaciente    FK CONSTRAINT     �   ALTER TABLE ONLY public.historico_paciente
    ADD CONSTRAINT idpaciente FOREIGN KEY (idpaciente) REFERENCES public.pacientes(idpaciente);
 G   ALTER TABLE ONLY public.historico_paciente DROP CONSTRAINT idpaciente;
       public       pathep    false    204    2767    205            �
           2606    24800    paciente_informacao idpaciente    FK CONSTRAINT     �   ALTER TABLE ONLY public.paciente_informacao
    ADD CONSTRAINT idpaciente FOREIGN KEY (idpaciente) REFERENCES public.pacientes(idpaciente);
 H   ALTER TABLE ONLY public.paciente_informacao DROP CONSTRAINT idpaciente;
       public       pathep    false    204    207    2767            �
           2606    24846    exames idpaciente    FK CONSTRAINT        ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idpaciente FOREIGN KEY (idpaciente) REFERENCES public.pacientes(idpaciente);
 ;   ALTER TABLE ONLY public.exames DROP CONSTRAINT idpaciente;
       public       pathep    false    211    204    2767            �
           2606    24856    exames idpeca    FK CONSTRAINT     o   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idpeca FOREIGN KEY (idpeca) REFERENCES public.pecas(idpeca);
 7   ALTER TABLE ONLY public.exames DROP CONSTRAINT idpeca;
       public       pathep    false    211    2765    203            �
           2606    24891    exames idreuniao    FK CONSTRAINT     {   ALTER TABLE ONLY public.exames
    ADD CONSTRAINT idreuniao FOREIGN KEY (idreuniao) REFERENCES public.reunioes(idrenuiao);
 :   ALTER TABLE ONLY public.exames DROP CONSTRAINT idreuniao;
       public       pathep    false    2783    211    212            |      x������ � �      t      x������ � �      q      x������ � �      r      x������ � �      s      x������ � �      }      x������ � �      ~      x������ � �      x      x������ � �      y      x������ � �      o      x������ � �      u      x������ � �      p      x������ � �      z      x������ � �      w      x������ � �      v      x������ � �            x������ � �      {      x������ � �     