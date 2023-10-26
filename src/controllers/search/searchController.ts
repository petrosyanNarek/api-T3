import { Request, Response, json } from "express";
import fs from "fs";
let currentRequest: NodeJS.Timeout | null = null;

export const search = async (req: Request, res: Response) => {
    try {
        const { email, number } = req.body;
        if (currentRequest) {
            clearTimeout(currentRequest);
        }
        currentRequest = setTimeout(async () => {
            fs.readFile("./src/data/data.json", 'utf8', (err, data) => {
                if (!err) {
                    const searchesDatum = JSON.parse(data).find((datum: any) => {
                        return number ? datum.email === email && datum.number == number.replaceAll('-', '') : datum.email === email;
                    })
                    if (searchesDatum) {
                        return res.status(200).send(searchesDatum);
                    } else {
                        return res.status(404).json({
                            message: "Not Found"
                        })
                    }
                }
            });
            currentRequest = null;
        }, 5000);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}