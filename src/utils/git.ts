import { execSync } from 'child_process';
import path from 'path';

export interface GitDates {
  createdAt: Date | null;
  updatedAt: Date | null;
}

export function getGitDates(filePath: string): GitDates {
  try {
    const absolutePath = path.resolve(filePath);

    // 最初のコミット日時を取得（作成日時）
    const createdAtCommand = `git log --follow --format='%aI' --reverse "${absolutePath}" | head -1`;
    const createdAtStr = execSync(createdAtCommand, {
      encoding: 'utf8',
    }).trim();

    // 最後のコミット日時を取得（更新日時）
    const updatedAtCommand = `git log -1 --format='%aI' "${absolutePath}"`;
    const updatedAtStr = execSync(updatedAtCommand, {
      encoding: 'utf8',
    }).trim();

    return {
      createdAt: createdAtStr ? new Date(createdAtStr) : null,
      updatedAt: updatedAtStr ? new Date(updatedAtStr) : null,
    };
  } catch {
    // Git履歴が取得できない場合（CI環境など）はnullを返す
    return {
      createdAt: null,
      updatedAt: null,
    };
  }
}

export function isSameDate(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString();
}
