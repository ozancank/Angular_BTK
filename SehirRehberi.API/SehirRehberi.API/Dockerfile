#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["SehirRehberi.API/SehirRehberi.API.csproj", "SehirRehberi.API/"]
RUN dotnet restore "SehirRehberi.API/SehirRehberi.API.csproj"
COPY . .
WORKDIR "/src/SehirRehberi.API"
RUN dotnet build "SehirRehberi.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SehirRehberi.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SehirRehberi.API.dll"]