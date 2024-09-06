
## Second Largest Number Finder

This project helps to find the second-largest number in a given set of numbers using TypeScript.

### Getting Started with Project Setup

The second-largest number finder is built in the following environment:

| Name  | Description                                                       | Version   | Required/Optional |
|-------|-------------------------------------------------------------------|-----------|-------------------|
| Node  | Node.js is used to run this project.                              | v20.17.0  | Required          |
| NPM   | NPM is the package manager for Node.js                            | v10.8.3  | Required          |

---

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone GIT_HTTPS_URL -b BRANCH
   ```
   Clone the repository from the given Git URL and switch to the appropriate branch.

2. **Install Dependencies**
   ```bash
   npm install
   ```
   Install all the modules and dependencies as defined in the `package.json` file.

3. **Run the TypeScript Files**
   Compile and execute the TypeScript file `secondLargestFinder.ts` using the following command:
   ```bash
   npx ts-node secondLargestFinder.ts
   ```

4. **Run Tests**
   The project uses **Jest** for testing. To run the tests:
   ```bash
   npm test
   ```

   This will execute the test cases defined in `secondLargestFinder.test.ts`.

---

## Directory Structure

```
|-- second-largest-number-finder/
    |-- .git/
    |-- .gitignore
    |-- jest.config.js
    |-- LICENSE
    |-- README.md
    |-- node_modules/
    |-- package-lock.json
    |-- package.json
    |-- secondLargestFinder.ts
    |-- secondLargestFinder.test.ts
```

---

## Additional Notes

- **Node Version**: Ensure you are using **Node.js v20.17.0** or above for compatibility.
- **TypeScript**: This project is built using TypeScript, and you can run it using `ts-node` to avoid compiling the TypeScript files separately.
- **Testing**: Test cases are included using **Jest**, and running `npm test` will execute them automatically.

---