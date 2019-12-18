CREATE TABLE [dbo].[Cars] (
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [carNumber] NVARCHAR (MAX) NULL,
    [isIn]      BIT            NOT NULL DEFAULT 0 ,
    CONSTRAINT [PK_Cars] PRIMARY KEY CLUSTERED ([Id] ASC)
);

