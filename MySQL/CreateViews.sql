use carservicedb;

create view workers_view as
select
	workers.Id as id,
	persons.Id as personId,
    persons.`Name` as personName,
    persons.BornDate as personBornDate,
    persons.PhoneNumber as personPhoneNumber,
    persons.Registration as personRegistration,
    specialtys.Id as specialtyId,
    specialtys.Specialty,
    workers.`rank`,
    workers.Employment
from workers join Persons on workers.idPerson = persons.Id
			 join specialtys on workers.idSpecialty = specialtys.Id;
    
select * from workers_view;