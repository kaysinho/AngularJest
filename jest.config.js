 module.exports = {
     preset: "jest-preset-angular",
     setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
     watchPlugins:[
         "jest-watch-typeahead/filename",
         "jest-watch-typeahead/testname"
     ],
     transformIngorePatterns: [
         "node_modules/(?!@ngrx|ngx-socket-io|ngx-auto-unsubscribe)"
     ],
     transform: {
         "^.+\\.(ts|js|html)$":"ts-jest"
     },
     testPathIngorePatterns: [
         "<rootDir>/node_modules/",
         "<rootDir>/dist/",
         "<rootDir>/cypress/",
         "<rootDir>/src/test.ts",
     ]
 }