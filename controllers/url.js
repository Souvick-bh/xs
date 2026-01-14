const { nanoid  } = require('nanoid');
const URL = require('../models/url');

async function handlegeneration(req,res) {
    const body = req.body;
    if(!body) {
        return res.json({massage: "url is required..."});
    }
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectId: body.url,
        createdBy: req.user?._id,
        visitHistory: [],
    });
    return res.redirect("/url");
}

async function handleanalytics(req,res) {
    const shortId = req.params?.shortenedId;
    const result = await URL.findOne({ shortId });
    return res.json({ totalClicks : result.visitHistory.length,
        analytics: result.visitHistory
    });
}

async function handleredirection (req,res) {
    const shortId = req.params?.shortenedId;
    const entry = await URL.findOneAndUpdate({shortId},{$push: {
        visitHistory: {
            timestamp: Date.now()
        }
    }});
    res.redirect(entry.redirectId);
}

async function handleAllShow(req,res) {
    const currentUser = req.user?._id;
    const allUrls = await URL.find({createdBy:currentUser});
    return res.render('home',{
        urls: allUrls,
    });
}

module.exports = {
    handlegeneration, handleanalytics, handleredirection, handleAllShow
}