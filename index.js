import { config } from 'dotenv';
import { start_server } from './src/server';

// load env variables
config({ debug: true });

// start server
start_server();
