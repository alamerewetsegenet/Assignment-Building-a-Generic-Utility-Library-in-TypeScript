# TypeScript Decorators Project

This project demonstrates the use of decorators in TypeScript to modify and enhance class behavior at design time.

## Project Structure

The project is structured as follows:

- `MyTestClass.ts`: Contains the main class `MyTestClass` with properties and methods.
- `decoratorsSimpleLogger.ts`: Defines a class decorator `SimpleLogger` to log when a class is instantiated.
- `tsconfig.json`: TypeScript configuration file enabling experimental decorators.

## How to Run

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/etsegenet-alamerew/typescript-decorators.git
    ```

2. Navigate to the project directory:

    ```
    cd typescript-decorators
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Compile TypeScript files:

    ```
    tsc
    ```

5. Run the compiled JavaScript file:

    ```
    node MyTestClass.js
    ```

6. Observe the console output to see the behavior of the decorators.

## Functionality

- The `SimpleLogger` decorator logs when an instance of `MyTestClass` is created.

