import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 80;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const API = "https://www.haloapi.com/stats/hw2/";
const config = {
    headers: {
        "Ocp-Apim-Subscription-Key": "07216b22749b4cb7abfb900d06fdcd64",
    }
};

app.get(`/`, async (req, res) => {
    // try {
    //     const response = await axios.get(`${API}players/tyrants%20medic/stats`, config);
    //     res.render("header.ejs", { result: response.data });
    // } catch(error) {
    //     console.log(error.message);
    // }

    res.render("home.ejs");
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});