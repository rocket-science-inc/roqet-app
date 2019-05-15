module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ["module-resolver", {
            root: "./src",
            alias: {
                "@": "roqet/src",
                "@roqet": "roqet/src/roqet",
                "@common": "roqet/src/common"
            }
        }]
    ]
};
