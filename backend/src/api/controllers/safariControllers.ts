import { Request, Response } from "express";
import { addSafari, updateSafari, deleteSafari, getAllSafari , getSafari } from "../models/Safaris";
import path from "path";

export const addSafariHandler = async (req: Request, res: Response) => {
    const { name, content, categoryId, lowSeason, peakSeason } = req.body;

    if (!name || !content || !lowSeason || !peakSeason ) return res.status(400).json({ error: "Missing fields" });

    const imageUrl = req.file ? path.join("uploads", req.file.filename) : "default-image.png";

    try {
        const safari = await addSafari(name, content, categoryId, imageUrl, lowSeason, peakSeason);

        res.status(201).json({ message: "Safari created successfully", safari });

    } catch (error) {

        console.error("Error adding safari:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getAllSafariHandler = async (req: Request, res: Response) => {

    try {
        const safaris = await getAllSafari();
        res.json(safaris);

    } catch (error) {
        console.error("Error fetching Safaris:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateSafariHandler = async (req: Request, res: Response) => {
    const { name, content, categoryId, lowSeason ,peakSeason } = req.body;
    const safariId = parseInt(req.params.id, 10);
    const image = req.file ? path.join("uploads", req.file.filename) : "default-image.png";

    if (!safariId || !name || !content) return res.status(400).json({ error: "Missing fields" });

    try {
        const updated = await updateSafari(safariId, name, content, categoryId, lowSeason, peakSeason, image);
        if (updated.count === 0) return res.status(404).json({ error: "Safari not found or not authorized" });

        res.json({ message: "Safari updated successfully" });
    } catch (error) {
        console.error("Error updating Safari:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getSafariHandler = async (req: Request, res: Response) => {
    const safariId = parseInt(req.params.id, 10);

    try {
        const safari = await getSafari(safariId);
        if (!safari) {
        return res.status(404).json({ error: "Safari not found" });
        res.status(200).json(safari)
      }


    } catch(error){
      console.error("Error Getting Safari:",error);
      res.status(500).json({ error: "Internal Server Error"})
    }
};


export const deleteSafariHandler = async (req: Request, res: Response) => {
    const safariId = parseInt(req.params.id, 10);
    try{
    const delSafari = await deleteSafari(safariId);
    res.json(delSafari);

  } catch(error){
    res.status(500).json({ error: "server error"});
  }

};
