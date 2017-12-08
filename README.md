# Spring Boot API with React UI
 
This example app shows how to create a Spring Boot API and display its data with a React UI.

Please read [Bootiful Development with Spring Boot and React](https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react) to see how this app was created.

**Prerequisites:** [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and [Node.js](https://nodejs.org/).

To run the server, cd into the `server` folder and run:
 
```bash
./mvnw spring-boot:run
```

To run the client, cd into the `client` folder and run:
 
```bash
yarn && yarn start
```

The primary example (without authentication) is in the `master` branch, while the Okta integration is in the `okta` branch. To check out the Okta branch on your local machine, run the following commands.

```bash
git clone git@github.com:oktadeveloper/spring-boot-react-example.git
git checkout okta
```

You will need to [create an OIDC App in Okta](https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react#create-an-oidc-app-in-okta) to get your values to perform authentication. 

You'll need to copy the `issuer` and `clientId` into `server/src/main/resources/application.properties` for the server. For the client, copy them into `client/src/App.tsx`. 