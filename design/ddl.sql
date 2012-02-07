CREATE TABLE Work (
    ID int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(ID),
    ProjectName varchar(50) NOT NULL,
    Information varchar(5000) NOT NULL,
    Brief varchar(1000) NOT NULL,
    BackgroundImage varchar(100) NOT NULL,
    GalleryImages varchar(1000) NOT NULL,
    Caption varchar(200) NOT NULL,
    Featured boolean NOT NULL,
    Status enum('completed','under construction','schematic design', 'design development', 'work-in-progress') NOT NULL,
    Category enum('residential', 'educational', 'public', 'installation', 'commercial', 'cultural', 'pre-BL-DG') NOT NULL,
    Chronology enum('2008', '2009', '2010', '2011', '2012') NOT NULL,
    Location enum('beijing, china', 'new orleans, usa', 'big bend, usa', 'shanghai, china', 'seoul, korea', 'manchanc, usa') NOT NULL
)
