module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ["module-resolver", {
            root: "./src",
            alias: {
                "@environment": "roqet/src/environment.ts",
                "@": "roqet/src",
                "@roqet": "roqet/src/roqet"
            }
        }]
    ]
};
