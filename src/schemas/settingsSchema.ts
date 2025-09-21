"use client";
import { z } from "zod";

export const sponsors1Schema = z.object({
  box1: z
    .string()
    .min(10, { message: "About 1 must contain at least 10 characters" }),
});

export const sponsors2Schema = z.object({
  box2: z
    .string()
    .min(10, { message: "About 2 must contain at least 10 characters" }),
});

export const sponsorsSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  section: z.string(),
});

export const projectSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  imgName1: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  text1: z
    .string()
    .min(10, { message: "text must contain at least 10 characters" })
    .max(300, { message: "text must contain at least 300 characters" }),
  imgName2: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  text2: z
    .string()
    .min(10, { message: "text must contain at least 10 characters" })
    .max(300, { message: "text must contain at least 300 characters" }),
  imgName3: z
    .string()
    .min(2, { message: "name must contain at least 2 characters" }),
  text3: z
    .string()
    .min(10, { message: "text must contain at least 10 characters" })
    .max(300, { message: "text must contain at least 300 characters" }),
});

export const aboutSchema = z.object({
  about: z
    .string()
    .min(10, { message: "about must contain at least 10 characters" }),
});

export const storiesSchema = z.object({
  text: z
    .string()
    .min(10, { message: "about must contain at least 10 characters" }),
});
