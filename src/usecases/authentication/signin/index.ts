import { UserRepository } from "../../../repository/implementations/UserRepository";
import { Bcrypt } from "../../../services/bcrypt/Bcrypt";
import Redis from "../../../services/database/nosql/Redis";
import { RedisOperations } from "../../../services/database/nosql/redisOperations.ts/RedisOperations";
import SQL from "../../../services/database/sql/SQL";
import { SqlOperations } from "../../../services/database/sql/sqlOperations/SqlOperations";
import { JsonWebToken } from "../../../services/jwt/JsonWebToken";
import { SignIn } from "./SignIn.ts";
import { SignInUseCase } from "./SignInUseCase";

const sql = new SQL();
const sqlOperations = new SqlOperations(sql);
const userRepository = new UserRepository(sqlOperations);
const bcrypt = new Bcrypt();
const jwt = new JsonWebToken();
const redis = new Redis();
const redisOperations = new RedisOperations(redis);
const signIn = new SignIn(userRepository, bcrypt, jwt, redisOperations);
const signInUseCase = new SignInUseCase(signIn);

export default signInUseCase;