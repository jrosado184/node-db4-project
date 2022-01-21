const express = require("express");
const router = require("express").Router();

router.get("/:id", (req, res) => {
  res.json("hello");
});

module.exports = router;
