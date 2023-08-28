CREATE TABLE [User](
	Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Login varchar(20) NOT NULL,
	Password varchar(30) NOT NULL,
 );

CREATE TABLE RefreshToken (
    TokenId    INT          IDENTITY (1, 1) NOT NULL,
    UserId    INT          NOT NULL,
    Token  VARCHAR (200) NOT NULL,
    ExpiryDate DATETIME NOT NULL
    
    CONSTRAINT [PK_RefreshToken] PRIMARY KEY CLUSTERED (TokenId ASC),
    FOREIGN KEY ([UserId]) REFERENCES [User] (Id) ON DELETE CASCADE ON UPDATE CASCADE  
);

--usuário para iniciar os testes
insert into [User] VALUES('admin','admin');
insert into [User] VALUES('joão','joao');
insert into [User] VALUES('maria','maria');