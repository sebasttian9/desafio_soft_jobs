const validateParametersUser = (req, res, next) => {
    const { email,password,rol,lenguage } = req.body;
    console.log(req.body)
    if (!email || !password || !rol || !lenguage) {
        return res.status(400).json({ error: "el email, password, rol y lenguage deben estar presentes" });
    }
    next();
}

export { validateParametersUser };