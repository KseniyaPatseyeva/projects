USE [parking]
GO

INSERT INTO [dbo].[Messages]
           ([LicensePlate]
           ,[IsArrived]
           ,[CreatedDateTime], [ParkingId])
     VALUES
           ('AB11131', '1', CONVERT(datetime2, '25/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '27/12/2019 09:00', 103), 1),
           ('AB11131', '0', CONVERT(datetime2, '23/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '25/12/2019 09:00', 103), 1),
           ('AB11131', '0', CONVERT(datetime2, '25/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '25/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '23/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '0', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '27/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '25/12/2019 09:00', 103), 1),
           ('AB11131', '0', CONVERT(datetime2, '26/12/2019 09:00', 103), 1),
           ('AB11131', '1', CONVERT(datetime2, '26/12/2019 09:00', 103), 1)
GO
