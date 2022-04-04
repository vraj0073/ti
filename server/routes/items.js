const { Router } = require("express");
const router = Router();

const Item = require("../models/Item");

const createItem = async (req, res) => {
  const { name, weight, quantity, sender } = req.body;
  try {
    const newItem = new Item({
      name,
      weight,
      quantity,
      sender,
    });

    await newItem.save();

    res.status(200).json(newItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Something went wrong!",
    });
  }
};

router.get("/getItems", getAllItems);
router.post("/createItem", createItem);

module.exports = router;
