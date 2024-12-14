import { Request, Response } from "express";
import { addSafari, updateSafari, deleteSafari, getAllSafari , getSafari } from "../models/Blog";
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const addSafariHandler = async (req: Request, res: Response) => {
    const { title, content, categoryId, lowSeason, peakSeason } = req.body;
    const image1 = req.file?.buffer;

    if (!title || !content || !lowSeason || !peakSeason ) return res.status(400).json({ error: "Missing fields" });

    try {
        const safari = await addSafari(name, content, image1, categoryId, lowSeason, peakSeason);

        res.status(201).json({ message: "Safari created successfully", safari });

    } catch (error) {

        console.error("Error adding safari:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getAllBlogsHandler = async (req: Request, res: Response) => {

    try {
        const safais = await getAllSafari();
        res.json(safaris);

    } catch (error) {
        console.error("Error fetching Safaris:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateSafariHandler = async (req: Request, res: Response) => {
    const { name, content, categoryId, lowSeason ,peakSeason } = req.body;
    const safariId = parseInt(req.params.id, 10);
    const image1 = req.file?.buffer;

    if (!safariId || !title || !content) return res.status(400).json({ error: "Missing fields" });

    try {
        const updated = await updateSafari(safariId, name, content, categoryId, image1);
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
      }
    
      const imageBase64 = safari.image1
      ? `data:image/jpeg;base64,${safari.image1.toString("base64")}`
      : null;

    // Respond with full details, including the Base64 image
    res.status(200).json({
      id: safari.id,
      name: safari.name,
      content: safari.content,
      categoryId: safari.categoryId,
      lowSeason: safari.lowSeason,
      peakSeason: safari.peakSeason,
      image: imageBase64,
    });

    } catch (error) {
        console.error("Error updating Safari:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Convert the image to Base64 for easier frontend rendering
    // const imageBase64 = safari.image1
    //   ? `data:image/jpeg;base64,${safari.image1.toString("base64")}`
    //   : null;
