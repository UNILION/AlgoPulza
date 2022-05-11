package com.algopulza.backend.api.service;

import com.algopulza.backend.api.request.AddDetailSolvedProblemReq;
import com.algopulza.backend.api.response.*;
import com.algopulza.backend.common.exception.NotFoundException;
import com.algopulza.backend.common.exception.handler.ErrorCode;
import com.algopulza.backend.db.entity.*;
import com.algopulza.backend.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional
@Service
public class AnalysisServiceImpl implements AnalysisService {

    private final SolvingLogRepository solvingLogRepository;
    private final ProblemRepository problemRepository;
    private final MemberRepository memberRepository;

    @Override
    public List<LanguageAnalysisRes> getLanguageAnalysisList(Long memberId) {
        long totalCount = solvingLogRepository.countByMemberIdAndLanguageIsNotNull(memberId);
        return solvingLogRepository.findLanguageByMemberId(memberId, totalCount);
    }

    @Override
    public List<SolvedCountAnalysisRes> getSolvedCountAnalysisList(Long memberId) {
        return solvingLogRepository.findCountByMemberId(memberId);
    }

    @Override
    public SolvingLogStatisticsRes getSolvingLogStatistics(Long memberId) {
        return solvingLogRepository.findStatisticsByMemberId(memberId);
    }

    @Override
    public void addDetailSolvedProblem(Long memberId, AddDetailSolvedProblemReq addDetailSolvedProblemReq) {
        String status = "solved";
        Member member = memberRepository.findById(memberId)
                                        .orElseThrow(() -> new NotFoundException(ErrorCode.NOT_FOUND_MEMBER));
        Problem problem = problemRepository.findByBojId(addDetailSolvedProblemReq.getProblemBojId())
                                           .orElseThrow(() -> new NotFoundException(ErrorCode.NOT_FOUND_PROBLEM));

        // member가 problem 문제를 language로 푼 기록이 있다면 업데이트, 없다면 새로 추가
        SolvingLog solvingLog = solvingLogRepository.findByProblemAndLanguage(member, problem, addDetailSolvedProblemReq.getLanguage())
                                                    .orElse(new SolvingLog());

        solvingLog.setMember(member);
        solvingLog.setProblem(problem);
        solvingLog.setStatus(status);
        solvingLog.setMemory(addDetailSolvedProblemReq.getMemory());
        solvingLog.setRunTime(addDetailSolvedProblemReq.getRunTime());
        solvingLog.setLanguage(addDetailSolvedProblemReq.getLanguage());
        solvingLog.setCodeLength(addDetailSolvedProblemReq.getCodeLength());
        solvingLog.setSolvingTime(addDetailSolvedProblemReq.getSolvingTime());
        solvingLog.setSubmitTime(addDetailSolvedProblemReq.getSubmitTime());
        solvingLogRepository.save(solvingLog);
    }

}
