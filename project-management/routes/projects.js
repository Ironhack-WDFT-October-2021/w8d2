const router = require('express').Router()
const Project = require('../models/Project')

// get all projects
router.get('/', (req, res, next) => {
	Project.find()
		.then(projects => {
			res.status(200).json(projects)
		})
		.catch(err => next(err))
});

// get all tasks for a specific project 

// create a project
router.post('/', (req, res, next) => {
	const { title, description } = req.body
	Project.create({ title, description })
		.then(project => {
			res.status(201).json(project)
		})
		.catch(err => next(err))
});

// get a specific project
router.get('/:id', (req, res, next) => {
	Project.findById(req.params.id)
		.then(project => {
			// check for a valid mongo object id 
			// mongoose.Types.ObjectId.isValid(req.params.id)
			if (!project) {
				res.status(404).json(project)
			} else {
				res.status(200).json(project)
			}
		})
		.catch(err => next(err))
});

router.put('/:id', (req, res, next) => {
	const { title, description } = req.body
	Project.findByIdAndUpdate(req.params.id, {
		title,
		description
	}, { new: true })
		.then(updatedProject => {
			res.status(200).json(updatedProject)
		})
		.catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
	Project.findByIdAndDelete(req.params.id)
		.then(() => {
			res.status(200).json({ message: 'project deleted' })
		})
});


module.exports = router;