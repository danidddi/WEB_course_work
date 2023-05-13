use carservicedb;

drop table if exists Services;
drop table if exists Workers;
drop table if exists Clients;
drop table if exists Cars;
drop table if exists Defects;
drop table if exists Specialties;
drop table if exists People;
drop table if exists Brands;
drop table if exists Colors;



-- ТАБЛИЦА ЦВЕТОВ
CREATE TABLE Colors(
	Id int not null primary key auto_increment, 
    Color varchar(50) not null unique 
);

-- ТАБЛИЦА МАРОК
CREATE TABLE Brands(
	Id int not null primary key auto_increment,
	Brand varchar(50) not null unique	-- марка авто 
);

-- ТАБЛИЦА ПЕРСОН
CREATE TABLE People(
	Id int not null primary key auto_increment,
    `Name` varchar(150) not null,			-- ФИО
	BornDate DATE not null,               	-- дата рождения
    PhoneNumber varchar(13) not null,    	-- номер телефона
    Registration varchar(50) not null    	-- прописка
    
);

-- ТАБЛИЦА СПЕЦИАЛЬНОСТЕЙ
CREATE TABLE Specialties(
	Id int not null primary key auto_increment,
    Specialty varchar(100) not null unique   -- специальность
);

-- ТАБЛИЦА ДЕФЕКТОВ
CREATE TABLE Defects(
	Id int not null primary key auto_increment,
    Defect varchar(50) not null unique   -- деффект
);

-- ТАБЛИЦА АВТО
CREATE TABLE Cars(
	Id int not null primary key auto_increment,
    idBrand int not null,				 	-- айди марки
    Model varchar(50) not null,       		-- модель
    idColor int not null,              		-- айди цвета
    ReleaseYear int not null,          		-- год выпуска
    Plate varchar(20) not null unique, 		-- регистрационный номер
    idOwner int not null,              		-- айди владельца
    foreign key (idColor) references Colors(id),
    foreign key (idBrand) references Brands(id),
    foreign key (idOwner) references People(id),
    check(ReleaseYear > 1885)
);

-- ТАБЛИЦА КЛИЕНТОВ
CREATE TABLE Clients(
	Id int not null primary key auto_increment,
    idPerson int not null,                	-- айди персоны
    idCar int not null,                  	-- айди авто
    foreign key (idPerson) references People(id),
    foreign key (idCar) references Cars(id)
);

-- ТАБЛИЦА РАБОТНИКОВ
CREATE TABLE Workers(
	Id int not null primary key auto_increment,
    idPerson int not null,                	-- айди персоны
    idSpecialty int not null,             	-- айди специальности
    `Rank` varchar(50) not null,           	-- разряд
    Employment Date NOT NULL,             	-- дата начала работы
    foreign key (idPerson) references People(id),
    foreign key (idSpecialty) references Specialties(id)
);


-- ТАБЛИЦА ЗАЯВОК НА ТЕХОБСУЛЖИВАНИЕ
CREATE TABLE Services(
	Id int not null primary key auto_increment,
    idClient int not null,                	-- айди клиента
    idWorker int,                			-- айди работника
    idDefect int not null,					-- дефекты
    DateAcceptance Date not null,         	-- дата приема авто
    DateIssuance Date,   			        -- дата выдачи авто
    Outlay int not null,                  	-- затраты на детали
    Pay int not null,                     	-- плата клиента
    Comments varchar(100),					-- дополнительные комментарии 
    foreign key (idClient) references Clients(id),
    foreign key (idWorker) references Workers(id),
    foreign key (idDefect) references Defects(id),
    check(Outlay > 0),
    check(Pay > 0)
);