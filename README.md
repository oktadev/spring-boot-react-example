# Spring Boot API with React UI
 
This example app shows how to create a Spring Boot API and display its data with a React UI.

Please read [Bootiful Development with Spring Boot and React](https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react) to see how this app was created.

**Prerequisites:** [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and [Node.js](https://nodejs.org/).

*[Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.*

* [Getting Started](#getting-started)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone git@github.com:oktadeveloper/spring-boot-react-example.git
cd spring-boot-react-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start each app, follow the instructions below.

To run the server, cd into the `server` folder and run:
 
```bash
./mvnw spring-boot:run
```

To run the client, cd into the `client` folder and run:
 
```bash
yarn && yarn start
```

The primary example (without authentication) is in the `master` branch, while the Okta integration is in the `okta` branch. To check out the Okta branch on your local machine, run the following command.

```bash
git checkout okta
```

You will need to [create an OIDC App in Okta](https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react#create-an-oidc-app-in-okta) to get your values to perform authentication. 

Log in to your Okta Developer account (or [sign up](https://developer.okta.com/signup/) if you don’t have an account) and navigate to **Applications** > **Add Application**. Click **Single-Page App**, click **Next**, and give the app a name you’ll remember. Change all instances of `localhost:8080` to `localhost:3000` and click **Done**.

Copy the `issuer` and `clientId` into `server/src/main/resources/application.properties` for the server. For the client, copy them into `client/src/App.tsx`. 

## Help

Please post any questions as comments on the blog post, or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email at developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).