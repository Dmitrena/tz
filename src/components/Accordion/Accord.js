import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container, Grid} from "@mui/material";

export default function SimpleAccordion() {
    return (
        <Container xs={{height: '300px', marginTop: '100px'}}>
            <Grid container sx={{marginTop: '200px'}}>
                <Grid container justifyContent='center'>
                    <Typography variant='h4' sx={{color: '#0C4577', fontWeight: 'bold', marginTop: '-100px'}}>ЭТАПЫ
                        РАЗРАБОТКИ MVP </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src='./Mobile.png' style={{height: '400px', width: '400px'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{color: '#8B8B8B'}}>
                        Заказывая у нас создание MVP, вы получаете ресурс опытной команды разработчиков, который можете
                        использовать по своему усмотрению.
                    </Typography>
                    <br/>
                    <Typography sx={{color: '#8B8B8B'}}>
                        Например — для того, чтобы переделывать изначальную концепцию несколько раз, тестировать разные
                        варианты и анализировать их. Или чтобы максимально быстро создать первую версию продукта, а
                        затем дорабатывать детали.
                    </Typography>
                    <br/>
                    <Typography sx={{color: '#8B8B8B'}}>
                        Мы готовы работать гибко и подстраивать нашу экспертизу в разработке под нужды вашего проекта.
                        Единственное, что остается неизменным — это гарантия, что мы сразу заложим правильную
                        архитектуру проекта, чтобы в будущем вам не пришлось полностью переделывать его, если вы
                        захотите что-то добавить или изменить.
                    </Typography>
                    <br/>
                    <Accordion sx={{
                        boxShadow: 'none', '&:before': {
                            display: 'none',
                        }
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{fontSize: '22px'}}><strong>1.</strong> Подготовительный этап</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Проводим серию интервью с представителями заказчика.
                                Фиксируем гипотезы, которые будем проверять на MVP.
                                Работаем с рисками.
                                Определяемся, какой функционал необходимо реализовать, сроки, стоимость реализации и
                                объем выделяемых ресурсов.
                                Заносим это в план работы и согласуем его с заказчиком.
                                Готовим документацию для начала разработки.
                                Выделяем запланированные ресурсы.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        boxShadow: 'none', '&:before': {
                            display: 'none',
                        }
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography sx={{fontSize: '22px'}}><strong>2.</strong> Создание MVP</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Двигаемся короткими спринтами по 1 неделе с демонстрацией проделанной работы по мере
                                необходимости. Проводим еженедельные встречи для корректировки и координации процесса
                                разработки.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        boxShadow: 'none', '&:before': {
                            display: 'none',
                        }
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography sx={{fontSize: '22px'}}><strong>3.</strong>Запуск</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Разворачиваем проект на серверах Заказчика. Запускаем, помогаем собрать обратную связь и
                                пожелания. Проводим планирование следующего этапа.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        boxShadow: 'none', '&:before': {
                            display: 'none',
                        }
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography sx={{fontSize: '22px'}}><strong>4.</strong>Доработка до полноценного
                                продукта</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                В случае подтверждения бизнес-гипотезы выполняем планомерную доработку продукта до
                                полной версии.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    );
}
