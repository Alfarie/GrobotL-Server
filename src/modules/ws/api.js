var express = require('express')
var router = express.Router();
var store = require('../store/store');


router.get('/timers', (req, res) => {
    
    let data = store.getters.getTimerList();
    res.json(data);
});

router.get('/activities', (req,res)=>{
    let data = store.getters.getActivity();
    res.json(data);
});

router.post('/timers', (req,res)=>{
    let timers = req.body;
    console.log(timers);
    store.actions.updateTimerChannelList(timers);
    res.json({message: true});
});

router.post('/activities', (req,res)=>{
    let activities = req.body;
    store.actions.updateActivity(activities);
    res.json({message: true});
});

router.post('/mode', (req,res)=>{
    let data = req.body;
    store.actions.setMode(data);
    res.json({message: true})
});
router.post('/status', (req,res)=>{
    let data = req.body;
    store.actions.setStatus(data);
    res.json({message: true});
})

router.post('/datetimes', (req,res)=>{
    let datetime = req.body;
    store.actions.setDateTime(datetime);
    res.json({message: true})
})

module.exports = router;