import express from 'express'
import path from 'path'

import webpack from 'webpack'
import http from 'http'
import socketIo from 'socket.io'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev'

let app = express()
let server = http.Server(app)
let socket = socketIo(server)

const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}))

socket.on('connection', (io) => {
	console.log('PC connected')
	io.on('disconnect', () => {
		console.log('PC disconnected')
	})
	io.on('toY7', () => {
		console.log('PC entered into reading mode')
	})
	io.on('manualReset', () => {
		console.log('PC reset to home manually')
	})
	io.on('autoReset', () => {
		console.log('PC timed out to home')
	})
	io.on('refresh', () => {
		io.broadcast.emit('refreshnow')
	})
	io.on('refreshed', () => {
		console.log('PC refreshed')
	})
	io.on('lock', () => {
		io.broadcast.emit('lockem')
	})
	io.on('unlock', () => {
		io.broadcast.emit('unlockem')
	})
})

app.use(webpackHotMiddleware(compiler))

app.use('/assets', express.static(path.join(__dirname, '/../assets')))

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'))
})


server.listen(3000, () => {
	console.log('Server running on port 3000')
})