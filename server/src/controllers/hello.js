exports.hello = (req, res) => {
    res.status(404).json({
        code: 404,
        error: 'This page doesn\'t exist. Try to use /cities or /meteo/{insee}'
    })
}