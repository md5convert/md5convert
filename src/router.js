import MD5 from './components/MD5'
import Base64 from './components/Base64'
import AES from './components/AES'
import Bcrypt from './components/Bcrypt'
import SHA256 from './components/SHA256'
import SHA1 from './components/SHA1'

export default [
	{
		path: '/md5',
		component: MD5,
		name: 'md5',
		meta : {title : 'Md5'}
	},
	{
		path: '/base64',
		component: Base64,
		name: 'base64',
		meta : {title : 'Base64'}
	},
	{
		path: '/aes',
		component: AES,
		name: 'aes',
		meta : {title : 'AES'}
	},
	{
		path: '/sha-256',
		component: SHA256,
		name: 'sha256',
		meta : {title : 'Sha-256'}
	},
	{
		path: '/sha-1',
		component: SHA1,
		name: 'sha1',
		meta : {title : 'Sha-1'}
	},
	{
		path: '/bcrypt',
		component: Bcrypt,
		name: 'bcrypt',
		meta : {title : 'Bcrypt'}
	},
]