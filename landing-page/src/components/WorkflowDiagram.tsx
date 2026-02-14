'use client';

import { motion } from 'framer-motion';
import { Database, Server, Smartphone, Cpu, Box, Calendar, MessageSquare } from 'lucide-react';

export default function WorkflowDiagram() {
    return (
        <div className="workflow-container">
            {/* User / WhatsApp */}
            <div className="workflow-step">
                <div className="workflow-icon tech-wa">
                    <Smartphone size={32} />
                </div>
                <span className="workflow-label">User (WhatsApp)</span>
            </div>

            <Arrow />

            {/* Evolution API */}
            <div className="workflow-step">
                <div className="workflow-icon tech-evo">
                    <MessageSquare size={32} />
                </div>
                <span className="workflow-label">Evolution API</span>
            </div>

            <Arrow />

            {/* n8n Brain */}
            <div className="workflow-center">
                <div className="workflow-main-icon tech-n8n">
                    <Cpu size={48} />
                </div>
                <span className="workflow-label-main">n8n Orchestrator</span>

                {/* Connected Tools */}
                <div className="workflow-satellites">
                    <Satellite icon={<Database size={20} />} label="Redis (Memory)" color="red" angle={0} />
                    <Satellite icon={<Box size={20} />} label="Qdrant (Vectors)" color="purple" angle={120} />
                    <Satellite icon={<Calendar size={20} />} label="G-Calendar" color="blue" angle={240} />
                </div>
            </div>

            <Arrow />

            {/* GCP */}
            <div className="workflow-step">
                <div className="workflow-icon tech-gcp">
                    <Server size={32} />
                </div>
                <span className="workflow-label">GCP VM</span>
            </div>
        </div>
    );
}

function Arrow() {
    return (
        <div className="workflow-arrow">
            <motion.div
                className="workflow-dot"
                animate={{ x: [0, 100], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <div className="workflow-line"></div>
        </div>
    );
}

function Satellite({ icon, label, color, angle }: any) {
    return (
        <div
            className="workflow-satellite-wrapper"
            style={{
                '--angle': `${angle}deg`,
                '--color': color
            } as any}
        >
            <motion.div
                className="workflow-satellite"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="satellite-orbiter" style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="satellite-icon" style={{ transform: `rotate(${angle}deg)` }}> {/* Counter-rotate icon */}
                        {icon}
                    </div>
                    <div className="satellite-label" style={{ transform: `rotate(${angle}deg)` }}>{label}</div>
                </div>
            </motion.div>
        </div>
    );
}
