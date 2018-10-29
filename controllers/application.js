const applicationController = {
	index: (req, res) => {
		res.send('hello')
		res.render('app/index')
	}
}

module.exports = applicationController