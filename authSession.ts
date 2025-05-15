"use server"
import { auth } from "./auth";

export const session = await auth()