const express = require('express')
const LedgerService = require('../../services/index')
console.log(LedgerService, 4)

const router = new express.Router()

router.get('/api', async (req, res) => {
  const ledger = await LedgerService.getLedger()
  console.log(ledger, 8)
  res.status(200).json(ledger.sort((a, b) => b.purchaseDate - a.purchaseDate))
})

router.get('/api/test', async (req, res) => {
  res.status(200).json({ "foo": "bar" })
})

router.post('/api/ledger', async (req, res) => {
  res.status(200).json(LedgerService.create(req.body))
})

router.post('/api/ledger/clear', async (req, res) => {
  res.status(200).json(LedgerService.clear())
})

module.exports = router