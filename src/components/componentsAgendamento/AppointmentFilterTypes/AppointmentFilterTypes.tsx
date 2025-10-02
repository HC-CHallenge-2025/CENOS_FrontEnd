import { APPOINTMENT_STATUS, APPOINTMENT_TYPES } from '../../../data/appointmentTypes';

export interface AppointmentFilters {
    statusFilter: 'Todos' | typeof APPOINTMENT_STATUS[number];
    typeFilter: 'Todos' | typeof APPOINTMENT_TYPES[number];
    dateFilter: 'Hoje' | 'Amanhã' | 'Próximos 7 Dias' | string; // Datas customizadas podem ser strings
}