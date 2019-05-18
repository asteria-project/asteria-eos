/*!
 * Asteria Eos Node Module
 * Copyright(c) 2019 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the Asteria Project: <https://github.com/asteria-project>
 */

declare module "asteria-eos" {

export interface HeliosJob {    name: string;    id: string;    description: string;    status: HeliosJobStatus;    date: number;}export enum HeliosJobStatus {    IN_PROGRESS = "IN_PROGRESS",    DONE = "DONE",    FAILED = "FAILED"}export interface HeliosProcessDescriptor {    type: string;    config: any;}export interface HeliosTemplate {    name: string;    id: string;    description: string;    processes: HeliosProcessDescriptor[];}}