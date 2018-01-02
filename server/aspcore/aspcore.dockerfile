FROM microsoft/dotnet

COPY . ./tmp

WORKDIR ./tmp

EXPOSE 3010:3010